###  This script will be used to preprocess the data in order to start training and testing of model

#Importing required libraries
import numpy as np
import torch
from torch import nn
from torch.utils.data import DataLoader
import numpy
import sklearn
from sklearn.model_selection import train_test_split
import os
import cv2
import matplotlib.pyplot as plt
from model import Model
from TrainTest import trainTest

class Dataset():
    def __init__(self, data, labels):
        self.data = torch.tensor(data)
        self.labels = torch.tensor(labels)


    def __len__(self):
        return len(self.data)

    def __getitem__(self, index):
        image = self.data[index]
        label = self.labels[index]

        return (image, label)

def preprocessing(data_path):

    # Listing and joining paths to retrieve good and bad images.
    bad_path, good_path = os.listdir(data_path)
    goods, bads = os.path.join(data_path, good_path), os.path.join(data_path, bad_path)
    good_image_paths, bad_image_paths = os.listdir(goods), os.listdir(bads)
    good_image_paths = good_image_paths[: len(good_image_paths)//5]
    bad_image_paths = bad_image_paths[: len(bad_image_paths)//5]

    # We will create data and label arrays
    data, labels = [],[]

    # First we will store the good images
    for image_path in good_image_paths:
        image = cv2.imread(os.path.join(goods, image_path))
        data.append(image)
        labels.append(0)

    for image_path in bad_image_paths:
        image = cv2.imread(os.path.join(bads, image_path))
        data.append(image)
        labels.append(1)

    # print(len(data))
    # print(len(good_image_paths), len(bad_image_paths))


    # Balancing the data so that there will less decisional bias
    if len(good_image_paths) < len(bad_image_paths):
        final_index = len(good_image_paths) * 2
        data = data[:final_index]
        labels = labels[:final_index]
    elif len(bad_image_paths) < len(good_image_paths):
        final_index = len(bad_image_paths) * 2
        data = data[-final_index:]
        labels = labels[-final_index:]

    return data, labels

def splitAndLoadData(data, labels):
    X_train, X_test, Y_train, Y_test = train_test_split(np.array(data), np.array(labels), test_size=0.3, shuffle= True, random_state= 42)

    train_dataset = Dataset(X_train, Y_train)
    test_dataset = Dataset(X_test, Y_test)

    batch = 16
    train_loader = DataLoader(train_dataset, batch_size= batch, shuffle=True)
    test_loader = DataLoader(test_dataset, batch_size=batch)

    batched_data, batched_labels = next(iter(train_loader))
    print(batched_data.shape)
    print(batched_labels.shape)

    return train_loader, test_loader

def initializeModel(leanring_rate, criterion):
    cnn = Model()
    optimizer = torch.optim.Adam(cnn.parameters(), lr = leanring_rate)
    if criterion == 'binary':
        criterion = nn.BCELoss()
    elif criterion == 'multi':
        criterion = nn.CrossEntropyLoss()

    return cnn, optimizer, criterion


if __name__ == '__main__':
    # Path for data
    DATA_PATH = './data/casting_512x512/casting_512x512'

    # Preprocessing data
    data, labels = preprocessing(DATA_PATH)

    # Split data and load data using DataLoader
    train_dataset, test_dataset = splitAndLoadData(data, labels)

    # Initializing Model
    cnn, optimizer, criterion = initializeModel(leanring_rate=0.0001, criterion= 'binary')

    # Creating trainTest class
    epochs = 50
    evaluator = trainTest(cnn, train_dataset, test_dataset, optimizer, criterion)

    # Training model
    train_loss, train_acc = evaluator.train(num_epochs= epochs)

    # Evaluating model
    test_loss, test_acc = evaluator.test()






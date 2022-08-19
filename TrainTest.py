import torch
class trainTest():

    def __init__(self, model, train_dataset, test_dataset, optimizer, criterion):
        self.model = model
        self.train_data = train_dataset
        self.test_data = test_dataset
        self.optimizer = optimizer
        self.criterion = criterion

    def calc_acc(self, preds, true_labels):
        num_correct = (preds.reshape(-1).round().float() == true_labels.float()).sum()
        acc = num_correct/len(true_labels)
        return acc

    def train(self, num_epochs):
        train_loss = []
        train_acc = []

        for epoch in range(num_epochs):
            print("-" * 50)
            print("Training Epoch: {}".format(epoch + 1))
            print("-" * 50)

            for i, (batched_data, batched_labels) in enumerate(self.train_data):
                self.optimizer.zero_grad()
                batched_data = batched_data.reshape((batched_data.shape[0], 3, batched_data.shape[1], batched_data.shape[2]))
                outputs = self.model(batched_data.float())

                loss = self.criterion(outputs.reshape(-1, 1).float(), batched_labels.reshape(-1, 1).float())

                acc = self.calc_acc(outputs, batched_labels)

                if (i % 10 == 2):
                    print("Train loss: {:.4f} Train Accuracy: {:.2f} Percent".format(loss.item(), acc * 100))
                    train_loss.append(loss.item())
                    train_acc.append(acc)

                loss.backward()
                self.optimizer.step()

        return train_loss, train_acc

    def test(self):
        test_loss = []
        test_acc = []

        with torch.no_grad():
            for i, (batched_data, batched_labels) in enumerate(self.test_data):
                batched_data = batched_data.reshape(
                    (batched_data.shape[0], 3, batched_data.shape[1], batched_data.shape[2]))
                outputs = self.model(batched_data.float())

                loss = self.criterion(outputs.float(), batched_labels.reshape(-1, 1).float())

                acc = self.calc_acc(outputs, batched_labels)
                if (i % 10 == 3):
                    print("Test loss: {:.4f}, Test Accuracy: {:.2f}".format(loss.item(), acc * 100))
                    test_loss.append(loss.item())
                    test_acc.append(acc)

        return test_loss, test_acc

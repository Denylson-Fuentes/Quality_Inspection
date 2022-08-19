import torch
from torch import nn

class Model(nn.Module):
    def __init__(self):
        super(Model, self).__init__()

        self.conv = nn.Sequential(
            nn.Conv2d(in_channels=3, out_channels= 16, kernel_size= (5, 5), padding=2, stride=1),
            nn.ReLU(),
            nn.Conv2d(in_channels=16, out_channels=64, kernel_size=(3, 3), padding=1, stride=1),
            nn.MaxPool2d(kernel_size=(2, 2)), # 512->256
            nn.ReLU(),

            nn.Conv2d(in_channels=64, out_channels=128, kernel_size=(5, 5), padding=2, stride=1),
            nn.ReLU(),
            nn.Conv2d(in_channels=128, out_channels=64, kernel_size=(3, 3), padding=1, stride=1),
            nn.MaxPool2d(kernel_size=(2, 2)), #256->128
            nn.ReLU(),

            nn.Conv2d(in_channels=64, out_channels=16, kernel_size=(5, 5), padding=2, stride=1),
            nn.ReLU(),
            nn.Conv2d(in_channels=16, out_channels=1, kernel_size=(3, 3), padding=1, stride=1),
            nn.MaxPool2d(kernel_size=(2, 2)), #128->64
            nn.ReLU(),
        )

        self.linear = nn.Sequential(
            nn.Flatten(start_dim= 1),
            nn.Linear(4096, 1024),
            nn.Linear(1024, 1024),
            nn.ReLU(),

            nn.Linear(1024,512),
            nn.Linear(512,256),
            nn.Linear(256,512),
            nn.ReLU(),

            nn.Linear(512,256),
            nn.Linear(256,128),
            nn.Linear(128,256),
            nn.ReLU(),

            nn.Linear(256, 128),
            nn.Linear(128, 64),
            nn.ReLU(),

            nn.Linear(64, 32),
            nn.Linear(32, 16),
            nn.Linear(16, 1),
        )


    def forward(self, x):
        output = self.conv(x)
        output = self.linear(output)
        preds = torch.sigmoid(output)

        return preds


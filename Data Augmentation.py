# The purpose of this script is to augment the current data given

#importing libraries for data augmentation
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import os

# Path for data
DATA_PATH = "./data/casting_512x512/casting_512x512"

# Listing and joining paths to retrieve good and bad images.
[bad_path, good_path] = os.listdir(DATA_PATH)
goods, bads = os.path.join(DATA_PATH, good_path), os.path.join(DATA_PATH, bad_path)
good_image_paths, bad_image_paths = os.listdir(goods), os.listdir(bads)

# good_images = []

### TESTING AND VISUALIZING AUGMENTED DATA AND COMPARING THEM TO THE ORIGINAL

# Test 1: Random Brightness
# image = plt.imread(os.path.join(goods, good_image_paths[1]))
# fig = plt.figure(figsize=(10, 7))
# for i in range(9):
#     if i == 0:
#         plt.subplot(3, 3, i+1)
#         plt.title('Original')
#         plt.axis('off')
#         plt.imshow(image)
#     else:
#         aug = tf.image.random_brightness(image, max_delta= (0.1 * i))
#         plt.subplot(3, 3, i+1)
#         plt.title("Max Delta {}". format(str(0.1 * i)))
#         plt.axis('off')
#         plt.imshow(aug)
# plt.show()

# # Test 2: Random Contrast (Up to Down)
# fig = plt.figure(figsize=(10, 7))
# for i in range(9):
#     if i == 0:
#         plt.subplot(3, 3, i+1)
#         plt.title('Original')
#         plt.axis('off')
#         plt.imshow(image)
#     else:
#         aug = tf.image.random_contrast(image, lower = 0.1 * i, upper= 1)
#         plt.subplot(3, 3, i+1)
#         plt.title("Lower: {:.2f}, Upper: {:.2f}". format(0.1 * i, 1))
#         plt.axis('off')
#         plt.imshow(aug)
# plt.show()

# # Test 3: Random Contrast (Down to Up)
# fig = plt.figure(figsize=(10, 7))
# for i in range(9):
#     if i == 0:
#         plt.subplot(3, 3, i+1)
#         plt.title('Original')
#         plt.axis('off')
#         plt.imshow(image)
#     else:
#         aug = tf.image.random_contrast(image, lower = 0, upper= 0.1 * (i+1))
#         plt.subplot(3, 3, i+1)
#         plt.title("Lower: {:.2f}, Upper: {:.2f}". format(0, 0.1 * (i+1)))
#         plt.axis('off')
#         plt.imshow(aug)
# plt.show()

# # Test 4: Random Saturation (Up to Down)
# fig = plt.figure(figsize=(10, 7))
# for i in range(9):
#     if i == 0:
#         plt.subplot(3, 3, i+1)
#         plt.title('Original')
#         plt.axis('off')
#         plt.imshow(image)
#     else:
#         aug = tf.image.random_saturation(image, lower = 0.1 * (i +1), upper= 1)
#         plt.subplot(3, 3, i+1)
#         plt.title("Lower: {:.2f}, Upper: {:.2f}". format(0.1 * (i+1), 1))
#         plt.axis('off')
#         plt.imshow(aug)
# plt.show()

# Test 5: Random Saturation (Down to Up)
# fig = plt.figure(figsize=(10, 7))
# for i in range(9):
#     if i == 0:
#         plt.subplot(3, 3, i+1)
#         plt.title('Original')
#         plt.axis('off')
#         plt.imshow(image)
#     else:
#         aug = tf.image.random_saturation(image, lower = 0, upper= 0.1 * (i+1))
#         plt.subplot(3, 3, i+1)
#         plt.title("Lower: {:.2f}, Upper: {:.2f}". format(0, 0.1 * (i+1)))
#         plt.axis('off')
#         plt.imshow(aug)
# plt.show()




# ## Test 5: Random_flip_left_right
#
# aug = tf.image.random_flip_left_right(image)
# plt.subplot(1, 2, 1)
# plt.title("Original")
# plt.imshow(image)
#
#
# plt.subplot(1, 2, 2)
# plt.title("Inverted")
# plt.imshow(aug)
# plt.show()

# ##Test 6: Flipping Verticallly
# aug = tf.image.random_flip_up_down(image)
#
#
# plt.subplot(1, 2, 1)
# plt.title("Original")
# plt.axis("off")
# plt.imshow(image)
#
#
# plt.subplot(1, 2, 2)
# plt.title("Inverted")
# plt.axis("off")
# plt.imshow(aug)
# plt.show()


# ## Test 7: Pipeline Using Saturation and Brightness
#
# fig = plt.figure(figsize=(10, 7))
# for i in range(9):
#     if i == 0:
#         plt.subplot(3, 3, 1)
#         plt.title("Original")
#         plt.imshow(image)
#     else:
#         plt.subplot(3, 3, i+1)
#         aug = tf.image.random_brightness(image, max_delta=0.2)
#         aug = tf.image.random_saturation(aug, lower=0.9, upper= 1)
#         plt.imshow(aug)
#
# plt.show()

# ## Final Test: Full Pipeline
# for i in range(20):
#     if i == 0:
#         plt.subplot(1, 20, 1)
#         plt.title("Original")
#         plt.axis("off")
#         plt.imshow(image)
#     else:
#         if i % 2 == 0:
#             plt.subplot(5, 4, i)
#             aug = tf.image.random_brightness(image, max_delta=0.1 * (int(i/2) + 1))
#             aug = tf.image.random_contrast(aug, lower= 0.1 * (int(i/2)), upper= 1)
#             aug = tf.image.random_flip_up_down(aug)
#             aug = tf.image.random_flip_left_right(aug)
#             aug = tf.image.random_saturation(aug, lower = 0.1 *  (int(i/2)), upper= 1)
#             plt.axis("off")
#             plt.imshow(aug)
#         else:
#             plt.subplot(5, 4, i)
#             aug = tf.image.random_brightness(image, max_delta=0.2)
#             aug = tf.image.random_contrast(aug, lower=0.6, upper= 1)
#             aug = tf.image.random_flip_up_down(aug)
#             aug = tf.image.random_flip_left_right(aug)
#             aug = tf.image.random_saturation(aug, lower=0.6, upper= 1)
#             plt.axis("off")
#             plt.imshow(aug)
#
# plt.show()


# Data Augmentation: This is were the original photos will be used to create augmented data in order to increase
# our data size and we will be storing said data as "original_path__copy_#"

# ## First the good data will be augmented
#
for image_path in good_image_paths:
    image = plt.imread(os.path.join(goods, image_path))
    for i in range(1,20):
        if i%2 ==0:
            aug = tf.image.random_brightness(image, max_delta=0.1 * (int(i / 2) + 1))
            aug = tf.image.random_contrast(aug, lower=0.1 * (int(i / 2)), upper=1)
            aug = tf.image.random_flip_up_down(aug)
            aug = tf.image.random_flip_left_right(aug)
            aug = tf.image.random_saturation(aug, lower=0.1 * (int(i / 2)), upper=1)

            plt.imsave(os.path.join(goods, image_path)[:-5] + "__copy{}.jpeg".format(i), np.array(aug))
        else:
            aug = tf.image.random_brightness(image, max_delta=0.2)
            aug = tf.image.random_contrast(aug, lower=0.6, upper=1)
            aug = tf.image.random_flip_up_down(aug)
            aug = tf.image.random_flip_left_right(aug)
            aug = tf.image.random_saturation(aug, lower=0.6, upper=1)
            plt.imsave(os.path.join(goods, image_path)[:-5] + "__copy{}.jpeg".format(i), np.array(aug))

## Now for the defective data

for image_path in bad_image_paths:
    image = plt.imread(os.path.join(bads, image_path))
    for i in range(1,20):
        if i%2 ==0:
            aug = tf.image.random_brightness(image, max_delta=0.1 * (int(i / 2) + 1))
            aug = tf.image.random_contrast(aug, lower=0.1 * (int(i / 2)), upper=1)
            aug = tf.image.random_flip_up_down(aug)
            aug = tf.image.random_flip_left_right(aug)
            aug = tf.image.random_saturation(aug, lower=0.1 * (int(i / 2)), upper=1)
            plt.imsave(os.path.join(bads, image_path)[:-5] + "__copy{}.jpeg".format(i), np.array(aug))
        else:
            aug = tf.image.random_brightness(image, max_delta=0.2)
            aug = tf.image.random_contrast(aug, lower=0.6, upper=1)
            aug = tf.image.random_flip_up_down(aug)
            aug = tf.image.random_flip_left_right(aug)
            aug = tf.image.random_saturation(aug, lower=0.6, upper=1)
            plt.imsave(os.path.join(bads, image_path)[:-5] + "__copy{}.jpeg".format(i), np.array(aug))

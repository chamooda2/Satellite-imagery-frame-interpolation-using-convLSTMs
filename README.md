# Flow Enhanched Interpolation Network (FEIN)

This model enhances video generation from satellite imagery by incorporating wind speed and direction (plans to use pressure and temperature as well) to predict cloud movement. Unlike traditional models that merely estimate motion, this approach integrates environmental factors for more accurate and realistic frame interpolation.

## Demo:

https://github.com/user-attachments/assets/7077a1a4-5ac7-41cf-8886-4760308ef649

## Approach

### Dataset
The images uesd are taken from INSAT-3DR Asia Sector Infrared2(BT) images and Wind data is taken from EOS-06 scatterometer. 
All the images are taken from ISRO's website https://mosdac.gov.in/gallery/  

### Preprocessing
##### Cloud Masking

##### Mapping EOS-06 to INSAT-3DR

##### Forming Wind Tensors

### Model Definition
##### Variational AutoEncoders

##### ConvLSTM

## Installation & Usage



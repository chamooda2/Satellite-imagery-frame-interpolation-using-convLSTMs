# Flow Enhanced Interpolation Network (FEIN)

This model enhances video generation from satellite imagery by incorporating wind speed and direction (plans to use pressure and temperature as well) to predict cloud movement. Unlike traditional models that merely estimate motion, this approach integrates environmental factors for more accurate and realistic frame interpolation.

## Demo

https://github.com/user-attachments/assets/7077a1a4-5ac7-41cf-8886-4760308ef649


Results After Successive Interpolations:

https://github.com/user-attachments/assets/c7281f23-51a1-4dda-bb8d-f626dfea7fe6


## Project Overview

FEIN combines satellite imagery with meteorological data to predict realistic cloud movement and frame interpolation in video sequences. The system uses Variational Autoencoders (VAE) and Convolutional LSTM (ConvLSTM) networks to learn spatial-temporal patterns in cloud dynamics.

## Project Structure

```
Bhot-sih-liya/
├── Billi Gang/           # Frontend and model components
│   ├── Front-end/        # Web interface (API.js)
│   ├── models/           # Pre-trained models
│   │   └── conv_lstm_model_09_12.pth
│   ├── notebooks/        # Jupyter notebooks for analysis
│   │   ├── convolutionalLSTM.ipynb
│   │   ├── Server requests automation.ipynb
│   │   └── variationalAutoEncoders.ipynb
│   └── outputs/          # Generated outputs
├── V1/                   # Version 1 implementations
│   ├── adw.py            # Additional wind data processing
│   ├── gan.py            # GAN implementation
│   ├── gans1.ipynb       # GAN notebook
│   ├── frame_interpolation_autoencoder/  # Saved model artifacts
│   ├── GeneratedImages/  # Output images
│   ├── MaskedImages/     # Cloud-masked images
│   └── updated_images/   # Processed image data
└── README.md             # This file
```

## Approach

### Dataset
- **Satellite Images**: INSAT-3DR Asia Sector Infrared 2 (BT) images from ISRO
- **Wind Data**: EOS-06 scatterometer data
- **Source**: ISRO's website at https://mosdac.gov.in/gallery/

### Preprocessing
- **Cloud Masking**: Identifying and isolating cloud regions in satellite imagery
- **Data Mapping**: Aligning EOS-06 wind data with INSAT-3DR image coordinates
- **Wind Tensors**: Converting wind vectors into tensor representations for model input

### Model Architecture

#### Variational Autoencoders (VAE)
- Frame encoding and reconstruction
- Latent space representation of cloud patterns
- See `variationalAutoEncoders.ipynb` for implementation

#### Convolutional LSTM (ConvLSTM)
- Spatial-temporal sequence prediction
- Predicts future cloud positions based on historical frames and wind data
- See `convolutionalLSTM.ipynb` for implementation

## Installation & Usage

### Requirements
- Python 3.7+
- PyTorch
- TensorFlow/Keras
- NumPy, OpenCV, Matplotlib

### Running the Models
1. Navigate to the `Billi Gang/notebooks/` directory
2. Open and run the respective Jupyter notebooks:
   - `variationalAutoEncoders.ipynb` - For VAE training/inference
   - `convolutionalLSTM.ipynb` - For ConvLSTM predictions
   - `Server requests automation.ipynb` - For API automation

### Pre-trained Models
Pre-trained models are available in `Billi Gang/models/`:
- `conv_lstm_model_09_12.pth` - ConvLSTM checkpoint

## Contributing
Contributions are welcome! Please ensure code follows the project structure and conventions.

We have also uploaded a PPT that explains the concept and thinking behind the project

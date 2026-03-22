# Protein Structure Detector (PSD)

Bridging artificial intelligence with molecular biology to unlock the secrets of proteins. The Protein Structure Detector (PSD) is a bioinformatics tool that leverages cutting-edge deep learning for protein structure analysis.

## Overview

PSD is designed to predict the secondary structure of proteins directly from their amino acid sequences. Users can input their sequence data via FASTA or raw text formats to receive rapid, high-fidelity structural predictions. 

## Technology and Model Architecture

The underlying technology relies on a sophisticated deep learning pipeline featuring approximately 2.4 million parameters:

* **CNN-BiLSTM Architecture**: The core model utilizes a hybrid neural network. It combines 1D convolutions, which are highly effective for local pattern detection, with a bidirectional LSTM (Long Short-Term Memory) network to capture complex, long-range sequence dependencies.


* **PSSM Profile Integration**: Position-Specific Scoring Matrices (PSSM) are integrated into the feature processing pipeline to enrich the input data.


* **Multi-Head Attention**: The network incorporates an attention mechanism to dynamically weigh the importance of different sequence segments during prediction.


* **Prediction Outputs**: The model is engineered to classify and output both 3-State and 8-State secondary structures.



## Performance Metrics

The model has been rigorously benchmarked against industry-standard datasets to ensure reliability:

* **Q3 Accuracy**: Achieves an 88% accuracy rate for 3-state predictions.


* **Q8 Accuracy**: Achieves a 76% accuracy rate for 8-state predictions.


* **SOV Score**: Reaches an 82% Segment Overlap Measure score.



## Training and Validation Datasets

To ensure robust model performance, PSD relies on widely recognized, industry-standard datasets:

* **Training Data**: The primary training dataset is CullPDB, consisting of 6,133 proteins. This dataset is strictly filtered at a 25% sequence identity threshold to ensure a diverse and unbiased training set.


* **Validation Data**: The model utilizes independent toolsets for unbiased evaluation, specifically testing against the CB513 dataset (513 proteins) and the CASP13/14 benchmark targets.



## Prediction Examples

PSD has successfully generated high-accuracy, real-world protein structure predictions. Notable examples showcased in the system include:

* Hemoglobin Alpha Chain.


* Lysozyme Structure.


* Insulin B-Chain.


* Myoglobin Fold.



---


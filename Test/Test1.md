## Knowledge Area: Machine learning
1. You are training a deep learning model for a classification task. The precision and recall of the model is quite low. What could you do to improve the precision and recall scores?
 - [ ] Use L2 regularization
 - [x] Use more training instance
 - [ ] Use dropout
 - [ ] Use L1 regularization

### Explanation: 
`The correct answer is to use more training instances. This is an example of underfitting. The other options are all regularizations used in cases of overfitting. See https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/`

2.A team of analysts is building machine learning models. They want to use managed services when possible but they would also like the ability to customize and tune their models. In particular, they want to be able to tune hyperparameters themselves. What managed AI service would you recommend they use?
 - [ ] Bigquery ML
 - [x] VertexAI Custom training
 - [ ] VertexAI AutoML training
 - [ ] Cloud TPUs
### Explanation:
`Vertex AI custom training allows for tuning hyperparameters. Vertex AI AutoML training tunes hyperparameters for you. BigQuery ML does not allow for hyperparameter tuning. Cloud TPUs are accelerators you can use to train large deep learning models.  See https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform`

3. You are developing a deep learning model and have training data with a large number of features. You are not sure which features are important. You'd like to use a regularization technique that will drive the parameter for the least important features toward zero. What regularization technique would you use?
 - [ ] L2 or Ridge Regression
 - [x] L1 or Lasso Regression
 - [ ] Backgropagation
 - [ ] Dropout
 ### Explanation:
 L1 or Lassos Regression adds an absolute value of magnitude penalty which drives the parameters (or coefficients) of least useful features toward zero. L2 or Ridge Regression adds a squared magnitude penalty that penalizes large parameters. Dropout is another form of regularization that ignores some features at some steps of the training process. Backpropagation is an algorithm for assigning error penalties to nodes in a neural network.  See https://cloud.google.com/bigquery-ml/docs/preventing-overfitting and https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/

## Knowledge Area: Data Management

## Knowledge Area: Database

## Knowledge Area: Data Pipelines

## Knowledge Area: Access Control

## Knowledge Area: Data Analysis

## Knowledge Area: Compliance

## Knowledge Area: Monitoring And Logging
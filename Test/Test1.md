## Machine learning
1. You are training a deep learning model for a classification task. The precision and recall of the model is quite low. What could you do to improve the precision and recall scores?
 - [ ] Use L2 regularization
 - [x] Use more training instance
 - [ ] Use dropout
 - [ ] Use L1 regularization

### Explanation
`The correct answer is to use more training instances. This is an example of underfitting. The other options are all regularizations used in cases of overfitting. See https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/`

2.A team of analysts is building machine learning models. They want to use managed services when possible but they would also like the ability to customize and tune their models. In particular, they want to be able to tune hyperparameters themselves. What managed AI service would you recommend they use?
 - [ ] Bigquery ML
 - [x] VertexAI Custom training
 - [ ] VertexAI AutoML training
 - [ ] Cloud TPUs
### Explanation
`Vertex AI custom training allows for tuning hyperparameters. Vertex AI AutoML training tunes hyperparameters for you. BigQuery ML does not allow for hyperparameter tuning. Cloud TPUs are accelerators you can use to train large deep learning models.  See https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform`
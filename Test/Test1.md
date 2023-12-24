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
 `L1 or Lassos Regression adds an absolute value of magnitude penalty which drives the parameters (or coefficients) of least useful features toward zero. L2 or Ridge Regression adds a squared magnitude penalty that penalizes large parameters. Dropout is another form of regularization that ignores some features at some steps of the training process. Backpropagation is an algorithm for assigning error penalties to nodes in a neural network.  See https://cloud.google.com/bigquery-ml/docs/preventing-overfitting and https://machinelearningmastery.com/overfitting-and-underfitting-with-machine-learning-algorithms/`

## Knowledge Area: Data Management
1. You are in the process of creating lifecycle policies to manage objects stored in Cloud storage. Which of the following are lifecycle conditions you can use in your policies? (Choose 3)
 - [x] Is Live
 - [ ] File Size
 - [ ] File Type
 - [x] Age
 - [x] Matches Storage Class
### Explanation
`The correct answers are age, matches storage class, and is live. File type and file size are not conditions available in lifecycle management policies.  See https://cloud.google.com/storage/docs/lifecycle`
2. A data warehouse team is concerned that some data sources may have poor quality controls. They do not want to bring incorrect or invalid data into the data warehouse. What could they do to understand the scope of the problem before starting to write ETL code?
 - [x] Perform a Data quality assessment on the source data it is extracted from the source system. These should include checks for ranges of value in each attribute, distribution of values in each attribute , counts of the number invalid and missing value , and other checks on the source data.
 - [ ] Have admintration of the source systems produce a data quality verification before exporting the data 
 - [ ] Load all source data into a datalake and then load it to the datawarehouse 
 - [ ] Load the data into the datawarehouse and log any records that fail integrity or consistency checks

### Explaination
`The correct answer is performing a data quality assessment on data extracted from the source system. Loading data from a data lake to a data warehouse will not provide an assessment of the range of the problem. Loading data into the data warehouse and logging failed checks is less efficient because it will provide log messages but not aggregate statistics on the full scope of the problem. The source systems may not have the ability to perform data quality assessments and if they do, you may get different kinds of reports from different systems. By performing a data quality assessment on extracted data you can produce a consistent set of reports for all data sources.  See https://cloud.google.com/blog/products/data-analytics/principles-and-best-practices-for-data-governance-in-the-cloud`


## Knowledge Area: Database

## Knowledge Area: Data Pipelines

## Knowledge Area: Access Control

## Knowledge Area: Data Analysis

## Knowledge Area: Compliance

## Knowledge Area: Monitoring And Logging
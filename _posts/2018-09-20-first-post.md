---
layout: post
title: First post!
image: /img/hello_world.jpeg
---

This is my first post, how exciting!
  
The first post will mainly focus on basic machine learning algorithms. Just like many cheat sheet I have done back in college. I found making one really helps one learn and graspe the knowledge. (I got motivated to do this greatly due to two reasons, 1: I wasn't happy at myself on my performance on behavioral questions on a job I really really want. Knowing is not enough. A solid knowledge graph is necessary for any firm understanding and futher advance which based upon; 2: I'm totally sold to one of the blogs I read about "It is essential for any morden (wo)man to be good at presenting themselves.")  

Here's the **basic format**: name, basic assumptions, usage, unique math identities (e.g. loss function)  
As acknowledged by Sophie, I'm going to use David Rosenburg's material for his machine learning class as a major reference (maybe).  

Here we go.  

# Menu:
 * Basic Theories
   * Loss Function
   * Optimizer
   * Resampling
 
 
 * Famous Models
   * Linear Regression
   * Logistic Regression
   * SVM (maybe...)
   * Multiclass Logistic
   * XGBoost
   * CNN
   * RNN


## Loss Function:  
In order to say whether we've done a good job, we need some way to measure the quality of a model.  
Generally, we will define a __loss function__ that says how far are our predictions from the correct answers. 

## Optimization:  
The process of minizing the error of our function is called optimization. For most algorithms we gonna see, one standard approach is called gradient descent.  

i.e. W* = W - learning_rate * W.grad, where W.grad = d_lossfunction / d_W  

However, calculation of gradient tends to be expensive and slow. As a result, one common and popular way to do the gradient descent is called SGD (stocastic gradient descent, or mini-batch gradient descent,) where we only randomly pick a small portion of data to do the gradient calculation.  

## Resampling:  
Resampling means repeatedly drawing samples from a training set. __(!!! I'm not super sure why their purpose.)__ A general explaination is that, if you don't have enough data, you shall resample to generate more data (no matter for training sake or evaluation sake.)
  1. Cross-validation[^1]:  
    * used to estimate the test error associated with a given model to evaluate its performace.
    * leave-one-out cross-validation: for n data rows, each time hold on data row out from training set and build a model based on that training set. Use the holded one to evaludate. Testing error = math.mean(MSE_i), for i = 1...n
    * k-fold cross-validation: randomly dividing the data into k groups of appoximately equal size. One group is holded as the validation set, and the model will fit on the remaining k-1 groups. Repeat k times, testing error = math.mean(MSE_i), for i = 1...k  
    * Generally **k-fold CV** often gives more accurate estimates of the test error than loocv. 
    
  2. Bootstrap:  
    * used to provide a measure of accuracy of a parameter estimate.


## 1. Simple Linear Regression  
### background:  
Linear regression is a prediction method that is more than 200 years old. (Simple) linear regression assumes a linear (straight line) relationship between the input variables (X) and the single output variable (y).  

### basic math shape:  
i.e. y = a_1 * x_1 + a_2 * x_2 + a_3 * x_3 +... + a_n * x_n + b, where a_i and b \in R.  
In matrix-vector expression, y = WX + b  

### loss function and optimizer:  
For us to minimize the error (loss function), we need some mechanism to alter the model (optimization). For linear regression, any common optimizer is fine, and we usually use the SGD as optimizer. Most loss functions for regression are fine for this job, and one common loss function is **mean square loss**, which is defined as 
```python
math.mean((y_pred-y)**2)
```

### reference:  
A great example of realizing this in a neural network context with data iterators is from [linear regression from scratch in gluon](https://gluon.mxnet.io/chapter02_supervised-learning/linear-regression-scratch.html)

## 2. Logistic Regression  
### background:  
Regression is the hammer we reach for when we want to answer how much? or how many? questions. Based on our experience, in industry, we’re more often interested in making categorical assignments. Traditionally, a whole family of SVM algorithms pursues the approach of trying to draw a line that best separates given data points to determine different classes. However, we usually aprproach the problem differently in neural networks.  

### basic math shape:  
i.e. Instead of just trying to separate the points, we train a probabilistic classifier which estimates, for each data point, the conditional probability that it belongs to one of the classes. Logistic regression is such an approach.  
Logistic regression is built upon linear regression with a slight modification:  

```python
y = sigmoid(WX + b),

def sigmoid(z):
  return 1./(1. + exp(-z))
```
Sigmoid function is chosen because it outputs a value between 0 and 1, which is more resonable to think of it as a probability. 
Note that an input of 0 gives a value of .5. So in the common case, where we want to predict positive whenever the probability is greater than .5 and negative whenever the probability is less than .5.  

### loss function and optimizer:  
If we interpret y_i_\hat as the probability that the i-th example  belongs to the positive class (y_i = 1), then 1 - y_i_\hat is the probability that the i-th example belongs to the negative class (y_i = 0). Thus, by combining this probability assumption, we can define our loss function as a **binary cross-entropy loss**:  

```python
Loss = - sum( y_i * log(y_i_\hat) + (1 - y_i) * log(1 - y_i_\hat))
```

This loss function is commonly called __log loss__ and is also commonly referred to as __binary cross entropy__. It is a special case of negative log likelihood. And it is a special case of cross-entropy, which can apply to the multi-class (>2) setting.  

## 2.5 Logistic regression with multiple classes  
### background:  
Binary logistic regression is great and useful, but in many cases, there will be more than 2 classes. One naive way to handle that is to build __n__ logistic regression models, each one is __x_i__ vs. all.  

### math:  
However, there's a smarter way to go about this. Under a neural network setting, we can force the ourput layer to be a discrete probability distribution over the k classes. We accomplish this by using the __softmax__ function, which does the following two things:
  1. it exponentiates (elementwise) e^z, forcing all values to be strictly positive.  
  2. it normalizes so that all values sum to 1, as  
  ```python
  def softmax(z):
     return exp(z) / (math.sum(exp(z_i))), for i in range(1,k)
  
  y = softmax(WX + B)
  ```

### loss function and optimizer:  
Fortunately, we can use same optimizer as in binary logistic regression + two minor tweaks in label and loss function:
* onthot encoding y so that y = 5 --> y = [0,0,0,0,1,0,0]  
* loss function -> -sum(y_i * log(y_i_hat))  




## 3. SVM (maybe) 
### background:  
Initially i was thinking...yeah definitely I shall put SVM on it since Sophie suggested that this one is very 'original' and has been fundation for many other algorithms. However, so far all the document I found about SVM are very math-heavy in a sense that we were trying to find close form optimization solutions to convex SVMs...which I really don't like.  
And probably the best explainer one will ever find is the SVM chapter from the book ISLR (Chp9, p337, 6th edition). I will do a very brief summary over here:  

### math:  
SVM (the support vector machine) is a generalization of a simple and intuitive classifer called the maximal margin classifer, to accept non-purely-separable cases (by __soft margin__), and to be able to draw non-linear class boundaries (by bring higher orders into the assumed function).  
Notice that only a small portion of data is important to SVM. __support vecotrs__ in fact are the obeservations that lie directly on the margin or on the wrong side of the margin for their class. Any other observations actually won't affect the result of SVM.
```python
f(x) = b + sum(a_i * np.dot(x, x_i) for i \in Set (Support vectors)
```

### tweak:  
the __np.dot()__ from above will yield a linear boundary. However, we can easily apply some non-linear function onto that dot product to produce non-linear boundary. Thus warp up the SVM.


## 4. Boosting Decision Trees  


  
  
[^1]: ISLR 6th dition p181

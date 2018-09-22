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

## Loss Function  
In order to say whether we've done a good job, we need some way to measure the quality of a model.  
Generally, we will define a __loss function__ that says how far are our predictions from the correct answers. 

## Optimization  
The process of minizing the error of our function is called optimization. For most algorithms we gonna see, one standard approach is called gradient descent.  
i.e. W* = W - learning_rate * W.grad, where W.grad = d_lossfunction / d_W  

However, calculation of gradient tends to be expensive and slow. As a result, one common and popular way to do the gradient descent is called SGD (stocastic gradient descent, or mini-batch gradient descent,) where we only randomly pick a small portion of data to do the gradient calculation.  

## 1. Simple Linear Regression  
### background:  
Linear regression is a prediction method that is more than 200 years old. (Simple) linear regression assumes a linear (straight line) relationship between the input variables (X) and the single output variable (y).  

### basic math shape:  
i.e. y = a_1 * x_1 + a_2 * x_2 + a_3 * x_3 +... + a_n * x_n + b, where a_i and b \in R.  

### manipulating the model:  
For us to minimize the error (loss function), we need some mechanism to alter the model. We do this by choosing the values of the parameters w and b. This is the only job of the learning algorithm. i.e. We'll try to find the weight vector w and bias term b (also called an offset or intercept) that approximately associate data points x_i with their corresponding labels y_i. 



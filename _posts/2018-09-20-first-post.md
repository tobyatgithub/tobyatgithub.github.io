---
layout: post
title: First post!
image: /img/hello_world.jpeg
---

This is my first post, how exciting!
  
The first post will mainly focus on basic machine learning algorithms. Just like many cheat sheet I have done back in college. I found making one really helps one learn and graspe the knowledge. (I got motivated to do this greatly due to two reasons, 1: I wasn't happy at myself on my performance on behavioral questions on a job I really really want. Knowing is not enough. A solid knowledge graph is necessary for any firm understanding and futher advance which based upon; 2: I'm totally sold to one of the blogs I read about "It is essential for any morden (wo)man to be good at presenting themselves.")  

Here's the basic format: name, basic assumptions, usage, unique math identities (e.g. loss function)  
As acknowledged by Sophie, I'm going to use David Rosenburg's material for his machine learning class as a major reference (maybe).  

Here we go.  

## Loss Function  
In order to say whether we've done a good job, we need some way to measure the quality of a model.  
Generally, we will define a __loss function__ that says how far are our predictions from the correct answers. 


## 1. Simple Linear Regression  
Linear regression is a prediction method that is more than 200 years old. (Simple) linear regression assumes a linear (straight line) relationship between the input variables (X) and the single output variable (y). 
i.e. y = a_1 * x_1 + a_2 * x_2 + a_3 * x_3 +... + a_n * x_n + b, where a_i and b \in R.  

Given a collection of data points X, and correspoinding target values y, we'll try to find the weight vector w and bias term b (also called an offset or intercept) that approximately associate data points x_i with their corresponding labels y_i. 



---
layout: post
title: Study Notes of 231 CNN
---

## **General**
This year, I decided to revist the class 231 offered by stanford online featured in [Convolutional Neural Networks for Visual Recognition](http://cs231n.stanford.edu/).  
One major reason is that I wasn't able to understand many details and reasoning behind it when I watch is last time around 2016. After gaining more experience, I now feel much more confident on the convolutional neural network and all the deep learning topics the class is covering. Plus, the content of the class is one of the best resource online about deep learning (as mentioned in [wild_ml's 2017 AI&DL Year Review](http://www.wildml.com/2017/12/ai-and-deep-learning-in-2017-a-year-in-review/)). Thus I feel an urge and necessity to learn it in a finer detail.  
This blog here is by no means to copy & paste the lecture content---that will be wastful and meaningless. But instead, this blog serves more like a __'cheat sheet'__ of the materials.  
From my previous experience, a 'cheat sheet' is really a great way to enforce student to really try hard summarizing what they have learned from one class, and thus a really helpful tool for studying. In additional, it will be useful in the future if I ever need to find a quick reference or refreshment on some of the topic.

The content of this notebook will be time sequential. The notes will generally follow the sequence of the lectures with some minor change. The main topic will be summarized and put into a menu for quick reference.  

## **Menu**  
1. Challenges of Image Recognition  
2. Data-driven Approach  
3. Better Training Approach  
4. Loss Function  
5. Regularization  
6. Optimization  
7. Active Function  
8. Model Ensemble  
9. Data Preprocessing  
10. Weight Initialization  
11. HyperParameter Search  
12. Transfer Learning
continue

## **Content**  
#### **Challenges of Image Recognition**:
* Illumination, deformation, background clutter, occlusion, interclass variation, gap between object label and image pixels.
* K-Nearest neighbors used to be an option, but it has multiple severe drawbacks as, 1. taks long time in testing, 2. doesn't capture pictures features well, 3. require a dense data set among the space to be potentially useful. (bad^3)  
  
#### **Data-driven Solution/Approach**: 
1. collect a dataset of images and labels, ->   
2. Use machin learning to train a classifier, ->   
3. evaluate the classifier on new images.  

#### **Better Training Approach**: 
  1. (Large dataset) Split data into train, val and test; choose hyperparameters on val and evaluate on test. Notice that you shall touch the test set only once. 
  2. (Small dataset) Cross-Validation: Split data into folds, try each fold as validation and average the restuls.

__Useful debug tips : the first round of iteration shall give you a loss that you expect, otherwise you better check the code for bug.__  

#### Loss Function:  
Intuitively, **loss function** is the way to tell us how good our model is doing.  
  * Hinge loss (Multiclass SVM loss):  
  ![hinge loss img](https://github.com/tobyatgithub/tobyatgithub.github.io/blob/master/img/231_hinge_loss.png)
  
  * Negative log likelihood loss (-log(SoftMax)):
  In parctice, the softmax function is used in tandem with the negative log-likelihood in multi-class problems in the output layer of a neural network.  
  We want to use it because: 1. it gives a good interpretation in probability. 2. NLLL will  = 0 if everything is correct, and get larger as the answer get wronger.
  More info about the derivation of softmax with NLLL can be found [in this github note.](https://ljvmiranda921.github.io/notebook/2017/08/13/softmax-and-the-negative-log-likelihood/)

#### Regularization:  
Intuitively, **regularization** is the way to limit the complexity of weight to improve its performance on loss function. The common approach of regularization is to add randomness into the training process, and averaging out that randomness during testing time. By 'mess' the model with randomness, we make the model perform better on unseen data by preventing model overfit.  
* l1, l2 regularizations: used to give smaller weight a stronger perference. These are commonly used in traditional machine learning models.  
* dropout: at each time, we enforce the model to forget some learned neurons (or weights.) This provides a similar effect as having multile ensembling sub-models within one single model. 
* batch normalization: normalize each random mini-batch during training time, and use a fixed stats to normalize during testing time. The random the mini-batch selection provides the randomness for regularization, and the result is kept consistent by fixing the stats in testing time.
* others: data augmentation for image (color jitter, axis flip,) fractional max pooling, stochastic depth...  


#### Optimization
**optimization** is the process of finding the least worst weight for our loss function with the given data.  
1. numericalgradient（approximated, slow, easy to write.)  
2. analytical gradient (exact, fast, error-prone.)  
In parctice, we always use analytical gradient in the code. Numerical gradient can be used for debugging.  

Among many optimization solutions, usually Adam is the best way to go, and LBFGS can be useful if full size batch is used for each training iteration.  

* Problem of SGD:
  1. data may have different sensitivity on different features, if so, with SGD --> slow progress + zig-zag behavior on weight learning (bad). 
  2. SGD easily stuck on local optimal (common on low dim problems) or saddle point (common on high dim problems.)
  --> to improve, people suggested SGD + momentem (x_t+1 = x_t - alpha * grad f(x_t) - alpha * rho * v_t) 
  --> to improve, AdaGrad and RMS Prop were suggested (both taking advantage of second order gradient.)  

* Backpropagation = a technique to find the gradient by recusively using the chain rule to compute gradient with every variable. Based on computational graph (so..always think about your graph when designing a deep neural network.) Usually backpropagation comes with most main deep learning frameworks.  

#### Active Functions:  
**Active functions** are the non-linear functions you select to apply onto your linear layers, to capture non-linear relationships. Generally, use ReLU with a small learning rate --> try Leaky ReLU/Maxout/ELU if needed --> try tanh but don't expect much --> never sigmoid (srry sigmoid.)  

There are 6 common active functions:
1. Sigmoid (bad. saturation problems; outputs are not zero-centered; exp() is computational expensive.)
2. tanh (OK..but not good. saturation problem; zero-centered.)
3. ReLU (good. no saturation at positive domain; computationally efficient; converges much faster than sigmoid and tanh; saturation at negative domain; not zero centered.)  
4. Leaky ReLU (good. no saturation; computationally efficient; converges much faster than sigmoid and tanh; can be flexible for the leaking rate.)
5. ELU (ok...good. all benefits from ReLU; closer to zero mean outputs; may have saturation at negative domain.)  
6. Maxout (ok...good. generalizes ReLU and Leaky ReLU; doesn't saturate; doubling parameters per neuron.)  
![active functions graph](https://github.com/tobyatgithub/tobyatgithub.github.io/blob/master/img/231_nonlinear_activation_fs.png)  

#### Model Ensemble:  
Other than the previous terms (loss function, regularization, and optimization,) we can also use __model ensemble__ to further improve model performance (~+2%). Basically model ensemble contains two steps:  
1. Train multiple independent models (can use same model with different random init, or different models.)  
2. At the test time, aggregate (usually average) their results to give final answer.  
3. You can also use multiple snapshot of a single model during training as your ensemble model (usually pair with a large learning rate &/ a moving average of parameters.)  

After we have the model stucture decided, we can also do [data preprocess, weight initialization] to further improve our model's performance.  

#### Data Preprocess:
  1. Zero-center (x -= np.mean(x, axis = 0)):
  This is necessary because this will prevent out gradient to be on same direction if all data happen to have the same sign.  
  2. Normalize (x /= np.std(x, axis = 0)):  
  This is useful as it will balance the sensitivity of the input data so that all features are in the same range and contribute equally. Not commonly used for image tasks.
![data preprocess intuition](https://github.com/tobyatgithub/tobyatgithub.github.io/blob/master/img/231_Data_preprocessing2.png)  

#### Weight Initialization:
We need a good initialization because:
  1. if we set all initial value to 0, then all nerons are doing the exact same thing and will be updated in the exact same way. BAD!
  2. small initialization will be bad as it will easily lead to gradient vanish (all grad = 0)
  3. big initialization will be bad as it will easily lead to all -1 or +1 gradient (dead network.) (???)
  4. as you can see, good initialization is hard, tricky, and necessary.
![weight init illust](https://github.com/tobyatgithub/tobyatgithub.github.io/blob/master/img/231_weight_Initialization.png)  

#### HyperParameter Search:  
**Hyperparameter** is the choices about the algorithm that we set rather than learn. The best choice of hyperparameters is very problem-dependent and must try them all and see what works best (on the validation dataset). Usually random serach is better than grid search in deep learning, and the search range shall be wide enough such that both ends are bad.  
For deep learning, we usually have a large dataset, and a common way to conduct hyper parameter search is to split dataset into __training, validation, and testing datasets__. Where our main goal is to use training dataset to train our model, and change hyper paramerters to improve model's performance on validation dataset. And we only touch the testing dataset once for final report and evaludation.  
If we are given a small dataset, we can use cross-validation to split our data into multiple folds (with one shared testing dataset, and several different combos of traning and validation.)  



#### Transfer Learning:  
**transfer learning** is a very useful technique that can speed the whole process up and rescue us when we have very few data and a powerful algortihm (to prevent overfitting.) Usually, the more data we have, the more layers of pre-trained model can we adjust and re-learn.  
![model zoo](https://github.com/tobyatgithub/tobyatgithub.github.io/blob/master/img/231_ModelZoo.png)  
 

  





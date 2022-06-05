
# Binge Flix

BingeFlix is an AI-based web application in which you can search for any Hollywood Movie. This application will provide all the information related to that movie, and the most interesting part, this application will provide you with the top 10 movie/Any TV Series recommendations based on your search. Also, the User can Sort the movie according to the user's needs and requirements.
<br>

![BingeFlix](https://cdn.discordapp.com/attachments/889884346301964348/980171554535137331/logo.png)

<br>
This application uses Content-Based Movie Recommendation to recommend movies to the user. TMDB API was used to retrieve all the information related to the movie and its cast. And Recommendation Engine is based on Cosine Similarity based on
<b> K Nearest Neighbors Algorithm </b> which is made by <b>
Flask </b> and Deployed on Heroku and used to fetch the data from the backend just like an API.

<br>

-----
## Live Demo 

<b>Web Application Link :</b> (https://bingeflix-seven.vercel.app/)
<br>
<b>API Backend Link :</b> (https://bingeflix-backend.herokuapp.com/)
<br>
<b>If Upper API Fails then use test api:</b>(https://testing-bingeflix-backend.herokuapp.com/)

-----
![Trending Page](https://cdn.discordapp.com/attachments/926055068271251467/980163620082155600/unknown.png)

![Movies](https://cdn.discordapp.com/attachments/926055068271251467/980164721212817428/unknown.png)

-------

## TV Series
![TV Series](https://cdn.discordapp.com/attachments/926055068271251467/980165029171200000/unknown.png)

-----------

## System Architecture

![System Architecture](https://cdn.discordapp.com/attachments/796397516643368961/980373711725142016/Group_76.jpg)

--------
# [Prototype](https://www.figma.com/proto/Dt8RVdVk9s6BHbshuW1I5C/Movie-Recommender?node-id=53%3A96&scaling=scale-down&page-id=0%3A1&starting-point-node-id=53%3A96)


Click Above to see design

--------
## Algorithms Used

1. <b> K Nearest Neighbors </b>
<!-- 2. <b> Heap Sort Algorithm by Heap-Js </b> -->

------
### Working Content-Based Recommendation System

It is a very basic common approach for implementing the recommendation system. In K Nearest Neighbors, we try to find the most similar k number of users as nearest neighbors to a given user, and predict ratings of the user for a given movie according to the information of the selected neighbors. So the algorithm has a lot of variation based on two points. One is how to calculate the distance of each user, and another is how to use or analyze the nearest neighbors to predict the ratings of a given user. I implemented Euclidean Distance and Cosine Similarity as the methods to calculate the distance, and tried various ways of analysis to predict the ratings like taking average, weighted average or the majority among nearest neighbors.

-----------------------------------

- ### Working of Cosine-Similarity:

 Cosine Similarity is the measure of calculating the difference of angle between two vectors. Becasue the length of the vector is not matter here, I first normalize each vector to a unit vector, and calculate the inner product of two vectors

![Imgur](https://i.imgur.com/4HFOKJt.png)


 ### [Article Reffered for KNN Algorithm](https://cs.carleton.edu/cs_comps/0910/netflixprize/final_results/knn/index.html)


<!-- ## Sorting Algorithm

Using Heap Sort the movies and TV Series get sort within no time using Heap-JS -->
## Features

- Shows Present Trending Movies and Series
- Sort movies and TV Series according to User Demands
- Recommended Similiar Movies when the user clicks on a particular Movie.
### Features Currently Under Progress

- Login 
- Responsive
- Better User Interface
- Training the new dataset to replace the tmdb API with bingeflix-backend API 

## Steps to Run Project On your Local Machine
### Clone or Fork this Repository

```
git clone https://github.com/Ankit0225/bingeflix.git
```

Run the following command to install the required dependencies.
 
- Install the dependencies within the project directory:
```
npm install
```
- Start the Development Server
```
npm start
```

## TechStack

### <b>Frontend</b> :
 - React JS
 - Mantine 

### <b>API</b> : 
 - TMDB
 - BingeFlix Backend
 <br>

 - Backend Test Demo

![BingeFlix Backend Test](https://cdn.discordapp.com/attachments/796397516643368961/980362812704571432/unknown.png)

### <b>Backend</b> :
 - Python
 - Flask
 - scikit-learn

### Other Dependencies
 - Axios
 - React icons
 - Jest 


The Following Application Performance is been rigorously tested
using Code Coverage through Chai and Jest JS  
### LightHouse Test Performance 

![Test](https://cdn.discordapp.com/attachments/912221791592796190/980214843938336838/unknown.png)

### Note: The training of 2021 dataset is under process

### Resources Used:

#### Backend


1. [Towards DataScience.com](https://towardsdatascience.com/how-to-build-from-scratch-a-content-based-movie-recommender-with-natural-language-processing-25ad400eb243)

2. [Towards DataScience.com](https://towardsdatascience.com/build-a-movie-recommendation-engine-backend-api-in-5-minutes-part-2-851b840bc26d)

3. [Flask API](https://towardsdatascience.com/creating-restful-apis-using-flask-and-python-655bad51b24#:~:text=A%20Comprehensive%20Guide%20for%20building%20Web%20APIs%20with%20Flask&text=Flask%20is%20a%20widely,scale%20up%20to%20complex%20applications)

4. [IMDB 5000 Dataset](https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset)
5. [Movies Dataset](https://www.kaggle.com/rounakbanik/the-movies-dataset)

-----------------------------------------------------------

Frontend

1. [The Movie DataBase Organisation](https://www.themoviedb.org/)

2. [Mantine.dev](https://mantine.dev/)

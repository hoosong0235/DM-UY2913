# Canada

## Demo

<a href="https://youtu.be/1Gdks29qcKk">
    <img src="ReadmeAssets/Thumbnail.png">
</a>

## Screenshots

### 1) Desktop

![](ReadmeAssets/Screenshots%201.png)

### 2) Mobile

![](ReadmeAssets/Screenshots%202.png)

## 1. Concept

The website that includes photos that are taken in Canada this thanksgiving holiday. Based on the red and white main color of Canada, I focused on dynamic and interactive funcitonalities of the website, such as animations and hover effects.

## 2. Moodboard

### 1) Canada Theme Website

<div align="center">
    <img src="ReadmeAssets/Moodboard1.png" style="width: 50%;">
</div>

### 2) Campbell's Soup Cans, Andy Warhol

<div align="center">
    <img src="ReadmeAssets/Moodboard2.jpg" style="width: 50%;">
</div>

### 3) iphone Albums Map

<div align="center">
    <img src="ReadmeAssets/Moodboard3.webp" style="width: 50%;">
</div>

## 3. Design

<a href="https://www.figma.com/file/b9tdhg9q64ka04KFMAMQ7J/DM-UY-2193-Intro-to-Web-Development?type=design&node-id=219%3A909&mode=design&t=XftJpGnoAVlL9X35-1">🎨 Figma: Design</a>

![](ReadmeAssets/Design.png)

## 4. Prototype

<a href="https://www.figma.com/proto/b9tdhg9q64ka04KFMAMQ7J/DM-UY-2193-Intro-to-Web-Development?page-id=219%3A909&type=design&node-id=219-910&viewport=126%2C153%2C0.14&t=0MKblED8QKrBawNw-1&scaling=min-zoom&starting-point-node-id=219%3A910&mode=design">🛠️ Figma: Desktop Prototype</a>

## 5. Develop

### 1) Hover Effect

<details>
<summary>⌨️ Code Snippet</summary>
</details>

### 2) Animation

<details>
<summary>⌨️ Code Snippet</summary>
</details>

### 3) Google Map and Pin

<details>
<summary>⌨️ Code Snippet</summary>
</details>

### 4) Modal

<details>
<summary>⌨️ Code Snippet</summary>
</details>

### 5) Media Query

<details>
<summary>⌨️ Code Snippet</summary>
</details>

## 6. Improvement

### 1) Auto Pin Generation

for file in folder
add html element of file in document
add pin on map based on file.location and file.image

### 2) Cluster Image

construct a graph data structure that includes all pin in the map.
construct as large as possible subgraph that edges in the subgraph is (distance / zoom) and containing as many as possible nodes.
combine all pin in each subgraphs to one pin and display in the map.
if zoom rate differs, recalculate the subgraphs and redisplay them.

### 3) Modulize

Modulize "niagaraFallsAnimation.js", "torontoAnimation.js", "quebecCityAnimation.js", and "montrealAnimation.js" to "animation.js" with sufficient parameter.
Modulize "niagaraFallsMap.js", "torontoMap.js", "quebecCityMap.js", and "montrealMap.js" to "map.js" with sufficient parameter.
Moulize "niagaraFalls.html", "toronto.html", "queubecCity.html", and "montreal.html" with sufficient parameter if possible.x``

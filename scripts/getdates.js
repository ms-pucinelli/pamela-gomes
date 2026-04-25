const today = new Date()

const currentYearElement = document.getElementById("currentyear")
currentYearElement.innerHTML = today.getFullYear()

const lastUpdatedElement = document.getElementById("lastupdated")
lastUpdatedElement.innerHTML = document.lastModified

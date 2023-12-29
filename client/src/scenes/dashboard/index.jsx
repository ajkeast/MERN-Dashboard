import React from 'react'
import AnimalTable from 'components/Table'

let data = [
  {
    "name": "Lion",
    "species": "Panthera leo",
    "class": "Mammalia",
    "habitat": "Grasslands",
    "diet": ["Antelopes", "Zebras"],
    "weight": "190 kg",
    "lifespan": "10-14 years",
    "color": "Yellow-brown",
    "location": {
      "latitude": 36.2,
      "longitude": -115.1
    }
  },
  {
    "name": "Giraffe",
    "species": "Giraffa camelopardalis",
    "class": "Mammalia",
    "habitat": "Savannah",
    "diet": ["Leaves", "Twigs"],
    "weight": "800 kg",
    "lifespan": "25 years",
    "color": "Yellow-brown",
    "location": {
      "latitude": -1.2,
      "longitude": 36.8
    }
  },
  {
    "name": "Kangaroo",
    "species": "Macropus",
    "class": "Mammalia",
    "habitat": "Woodland",
    "diet": ["Grasses", "Herbs"],
    "weight": "90 kg",
    "lifespan": "6-8 years",
    "color": "Brown",
    "location": {
      "latitude": -25.3,
      "longitude": 133.8
    }
  },
  {    "name": "Elephant",    "species": "Loxodonta africana",    "class": "Mammalia",    "habitat": "Savannah",    "diet": ["Grasses", "Fruits"],
    "weight": "5000 kg",
    "lifespan": "60-70 years",
    "color": "Gray",
    "location": {
      "latitude": -3.4,
      "longitude": 36.8
    }
  },
  {
    "name": "Gorilla",
    "species": "Gorilla beringei",
    "class": "Mammalia",
    "habitat": "Rainforest",
    "diet": ["Leaves", "Fruits"],
    "weight": "200 kg",
    "lifespan": "35-40 years",
    "color": "Black",
    "location": {
      "latitude": -0.5,
      "longitude": 29.5
    }
  },
  {
    "name": "Panda",
    "species": "Ailuropoda melanoleuca",
    "class": "Mammalia",
    "habitat": "Mountain forests",
    "diet": ["Bamboo"],
    "weight": "100 kg",
    "lifespan": "20 years",
    "color": "White and black",
    "location": {
      "latitude": 30.7,
      "longitude": 103.8
    }
  }
]

const Dashboard = () => {
  return (
    <AnimalTable data={data}></AnimalTable>
  )
}



export default Dashboard;
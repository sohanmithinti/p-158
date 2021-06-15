AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "avengers",
          title: "Avengers",
          url: "./assets/avengers.png",
      },
      {
        id: "ben-10",
        title: "Ben-10",
        url: "./assets/ben-10.jpg",
      },

      {
        id: "pokemon",
          title: "Pokemon",
          url: "./assets/pokemon.jpg",
      },
      {
        id: "shin-chan",
          title: "Shin Chan",
          url: "./assets/Shin-chan.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;
      
      const b1 = this.createBorder(position, item.id)
      const t1 = this.createThumbNail(item)
      b1.appendChild(t1)
      const title1 = this.createTitle(position, item)
      b1.appendChild(title1)  
      this.placesContainer.appendChild(b1); 
    }
  },

  createBorder: function(position, id){
    const e1 = document.createElement("a-entity")
    e1.setAttribute("id", id)
    e1.setAttribute("visible", true)
    e1.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    })
    e1.setAttribute("position", position)
    e1.setAttribute("material", {
      color: "brown",
      opacity: 1
    })
    e1.setAttribute("cursor-listeners", {})
    return(e1)
  },

  createThumbNail: function(item){
    const e1 = document.createElement("a-entity")
    e1.setAttribute("visible", true)
    e1.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    })
    e1.setAttribute("material", {
      src: item.url
    })
    return(e1)
  },

  createTitle: function(position, item){
    const e1 = document.createElement("a-entity")
    e1.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 75,
      color: "black",
      value: item.title
    })
    const pos = position
    pos.y = -20
    e1.setAttribute("position", pos)
    e1.setAttribute("visible", true)

    return(e1)
  }
  
});

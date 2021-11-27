let point = document.querySelectorAll(".point");
const polygon = document.getElementById("polygon");
var ratings = [];

var grassy = [
  {
    pos: 1,
    flavor: "grassy",
    value: 5,
    x: 200,
    y: 100
  },
  {
    pos: 1,
    flavor: "grassy",
    value: 4,
    x: 180,
    y: 100
  },
  {
    pos: 1,
    flavor: "grassy",
    value: 3,
    x: 160,
    y: 100
  },
  {
    pos: 1,
    flavor: "grassy",
    value: 2,
    x: 140,
    y: 100
  },
  {
    pos: 1,
    flavor: "grassy",
    value: 1,
    x: 120,
    y: 100
  }
];

var herbal = [
  {
    pos: 2,
    flavor: "herbal",
    value: 5,
    x: 192.3879532511287,
    y: 138.26834323650897
  },
  {
    pos: 2,
    flavor: "herbal",
    value: 4,
    x: 173.91036260090294,
    y: 130.6146745892072
  },
  {
    pos: 2,
    flavor: "herbal",
    value: 3,
    x: 155.4327719506772,
    y: 122.96100594190538
  },
  {
    pos: 2,
    flavor: "herbal",
    value: 2,
    x: 136.95518130045147,
    y: 115.3073372946036
  },
  {
    pos: 2,
    flavor: "herbal",
    value: 1,
    x: 118.47759065022574,
    y: 107.6536686473018
  }
];
var caramel = [
  {
    pos: 3,
    flavor: "caramel",
    value: 5,
    x: 170.71067811865476,
    y: 170.71067811865476
  },
  {
    pos: 3,
    flavor: "caramel",
    value: 4,
    x: 156.5685424949238,
    y: 156.5685424949238
  },
  {
    pos: 3,
    flavor: "caramel",
    value: 3,
    x: 142.42640687119285,
    y: 142.42640687119285
  },
  {
    pos: 3,
    flavor: "caramel",
    value: 2,
    x: 128.2842712474619,
    y: 128.2842712474619
  },
  {
    pos: 3,
    flavor: "caramel",
    value: 1,
    x: 114.14213562373095,
    y: 114.14213562373095
  }
];
var nutty = [
  {
    pos: 4,
    flavor: "nutty",
    value: 5,
    x: 138.268343236509,
    y: 192.3879532511287
  },
  {
    pos: 4,
    flavor: "nutty",
    value: 4,
    x: 130.6146745892072,
    y: 173.91036260090294
  },
  {
    pos: 4,
    flavor: "nutty",
    value: 3,
    x: 122.9610059419054,
    y: 155.4327719506772
  },
  {
    pos: 4,
    flavor: "nutty",
    value: 2,
    x: 115.3073372946036,
    y: 136.95518130045147
  },
  {
    pos: 4,
    flavor: "nutty",
    value: 1,
    x: 107.6536686473018,
    y: 118.47759065022574
  }
];
var earthy = [
  {
    pos: 5,
    flavor: "earthy",
    value: 5,
    x: 100,
    y: 200
  },
  {
    pos: 5,
    flavor: "earthy",
    value: 4,
    x: 100,
    y: 180
  },
  {
    pos: 5,
    flavor: "earthy",
    value: 3,
    x: 100,
    y: 160
  },
  {
    pos: 5,
    flavor: "earthy",
    value: 2,
    x: 100,
    y: 140
  },
  {
    pos: 5,
    flavor: "earthy",
    value: 1,
    x: 100,
    y: 120
  }
];
var moldy = [
  {
    pos: 6,
    flavor: "moldy",
    value: 5,
    x: 61.731656763491024,
    y: 192.3879532511287
  },
  {
    pos: 6,
    flavor: "moldy",
    value: 4,
    x: 69.38532541079283,
    y: 173.91036260090294
  },
  {
    pos: 6,
    flavor: "moldy",
    value: 3,
    x: 77.03899405809462,
    y: 155.4327719506772
  },
  {
    pos: 6,
    flavor: "moldy",
    value: 2,
    x: 84.69266270539642,
    y: 136.95518130045147
  },
  {
    pos: 6,
    flavor: "moldy",
    value: 1,
    x: 92.3463313526982,
    y: 118.47759065022574
  }
];
var stinky = [
  {
    pos: 7,
    flavor: "stinky",
    value: 5,
    x: 29.28932188134526,
    y: 170.71067811865476
  },
  {
    pos: 7,
    flavor: "stinky",
    value: 4,
    x: 43.4314575050762,
    y: 156.5685424949238
  },
  {
    pos: 7,
    flavor: "stinky",
    value: 3,
    x: 57.573593128807154,
    y: 142.42640687119285
  },
  {
    pos: 7,
    flavor: "stinky",
    value: 2,
    x: 71.7157287525381,
    y: 128.2842712474619
  },
  {
    pos: 7,
    flavor: "stinky",
    value: 1,
    x: 85.85786437626905,
    y: 114.14213562373095
  }
];
var robust = [
  {
    pos: 8,
    flavor: "robust",
    value: 5,
    x: 7.612046748871322,
    y: 138.268343236509
  },
  {
    pos: 8,
    flavor: "robust",
    value: 4,
    x: 26.089637399097057,
    y: 130.6146745892072
  },
  {
    pos: 8,
    flavor: "robust",
    value: 3,
    x: 44.56722804932279,
    y: 122.9610059419054
  },
  {
    pos: 8,
    flavor: "robust",
    value: 2,
    x: 63.04481869954853,
    y: 115.3073372946036
  },
  {
    pos: 8,
    flavor: "robust",
    value: 1,
    x: 81.52240934977426,
    y: 107.6536686473018
  }
];
var buttery = [
  {
    pos: 9,
    flavor: "buttery",
    value: 5,
    x: 0,
    y: 100
  },
  {
    pos: 9,
    flavor: "buttery",
    value: 4,
    x: 20,
    y: 100
  },
  {
    pos: 9,
    flavor: "buttery",
    value: 3,
    x: 40,
    y: 100
  },
  {
    pos: 9,
    flavor: "buttery",
    value: 2,
    x: 60,
    y: 100
  },
  {
    pos: 9,
    flavor: "buttery",
    value: 1,
    x: 80,
    y: 100
  }
];
var lactic = [
  {
    pos: 10,
    flavor: "lactic",
    value: 5,
    x: 7.6120467488713075,
    y: 61.731656763491074
  },
  {
    pos: 10,
    flavor: "lactic",
    value: 4,
    x: 26.089637399097043,
    y: 69.38532541079286
  },
  {
    pos: 10,
    flavor: "lactic",
    value: 3,
    x: 44.56722804932278,
    y: 77.03899405809464
  },
  {
    pos: 10,
    flavor: "lactic",
    value: 2,
    x: 63.04481869954852,
    y: 84.69266270539643
  },
  {
    pos: 10,
    flavor: "lactic",
    value: 1,
    x: 81.52240934977426,
    y: 92.34633135269821
  }
];
var crumbly = [
  {
    pos: 11,
    flavor: "crumbly",
    value: 5,
    x: 29.28932188134523,
    y: 29.28932188134526
  },
  {
    pos: 11,
    flavor: "crumbly",
    value: 4,
    x: 43.43145750507618,
    y: 43.4314575050762
  },
  {
    pos: 11,
    flavor: "crumbly",
    value: 3,
    x: 57.57359312880714,
    y: 57.573593128807154
  },
  {
    pos: 11,
    flavor: "crumbly",
    value: 2,
    x: 71.7157287525381,
    y: 71.7157287525381
  },
  {
    pos: 11,
    flavor: "crumbly",
    value: 1,
    x: 85.85786437626905,
    y: 85.85786437626905
  }
];
var crystalline = [
  {
    pos: 12,
    flavor: "crystalline",
    value: 5,
    x: 61.73165676349105,
    y: 7.612046748871322
  },
  {
    pos: 12,
    flavor: "crystalline",
    value: 4,
    x: 69.38532541079283,
    y: 26.089637399097057
  },
  {
    pos: 12,
    flavor: "crystalline",
    value: 3,
    x: 77.03899405809463,
    y: 44.567228049322786
  },
  {
    pos: 12,
    flavor: "crystalline",
    value: 2,
    x: 84.69266270539642,
    y: 63.04481869954853
  },
  {
    pos: 12,
    flavor: "crystalline",
    value: 1,
    x: 92.34633135269821,
    y: 81.52240934977426
  }
];
var salty = [
  {
    pos: 13,
    flavor: "salty",
    value: 5,
    x: 100,
    y: 0
  },
  {
    pos: 13,
    flavor: "salty",
    value: 4,
    x: 100,
    y: 20
  },
  {
    pos: 13,
    flavor: "salty",
    value: 3,
    x: 100,
    y: 40
  },
  {
    pos: 13,
    flavor: "salty",
    value: 2,
    x: 100,
    y: 60
  },
  {
    pos: 13,
    flavor: "salty",
    value: 1,
    x: 100,
    y: 80
  }
];
var sweet = [
  {
    pos: 14,
    flavor: "sweet",
    value: 5,
    x: 138.268343236509,
    y: 7.612046748871336
  },
  {
    pos: 14,
    flavor: "sweet",
    value: 4,
    x: 130.6146745892072,
    y: 26.08963739909707
  },
  {
    pos: 14,
    flavor: "sweet",
    value: 3,
    x: 122.9610059419054,
    y: 44.5672280493228
  },
  {
    pos: 14,
    flavor: "sweet",
    value: 2,
    x: 115.3073372946036,
    y: 63.044818699548536
  },
  {
    pos: 14,
    flavor: "sweet",
    value: 1,
    x: 107.6536686473018,
    y: 81.52240934977426
  }
];
var sharp = [
  {
    pos: 15,
    flavor: "sharp",
    value: 5,
    x: 170.71067811865476,
    y: 29.28932188134523
  },
  {
    pos: 15,
    flavor: "sharp",
    value: 4,
    x: 156.5685424949238,
    y: 43.43145750507618
  },
  {
    pos: 15,
    flavor: "sharp",
    value: 3,
    x: 142.42640687119285,
    y: 57.57359312880714
  },
  {
    pos: 15,
    flavor: "sharp",
    value: 2,
    x: 128.2842712474619,
    y: 71.7157287525381
  },
  {
    pos: 15,
    flavor: "sharp",
    value: 1,
    x: 114.14213562373095,
    y: 85.85786437626905
  }
];
var lemon = [
  {
    pos: 16,
    flavor: "lemon",
    value: 5,
    x: 192.3879532511287,
    y: 61.731656763491046
  },
  {
    pos: 16,
    flavor: "lemon",
    value: 4,
    x: 173.91036260090294,
    y: 69.38532541079283
  },
  {
    pos: 16,
    flavor: "lemon",
    value: 3,
    x: 155.43277195067722,
    y: 77.03899405809463
  },
  {
    pos: 16,
    flavor: "lemon",
    value: 2,
    x: 136.95518130045147,
    y: 84.69266270539642
  },
  {
    pos: 16,
    flavor: "lemon",
    value: 1,
    x: 118.47759065022574,
    y: 92.34633135269821
  }
];

var flavors = [
  grassy,
  herbal,
  caramel,
  nutty,
  earthy,
  moldy,
  stinky,
  robust,
  buttery,
  lactic,
  crumbly,
  crystalline,
  salty,
  sweet,
  sharp,
  lemon
];

let n = 0;

for (const sets of flavors) {
  for (const set of sets) {
    point[n].setAttribute("id", set.flavor);
    point[n].setAttribute("cx", set.x);
    point[n].setAttribute("cy", set.y);
    point[n].addEventListener("click", function () {
      ratings.push({
        pos: set.pos,
        flavor: this.getAttribute("id"),
        rating: set.value,
        x: this.getAttribute("cx"),
        y: this.getAttribute("cy")
      });
      console.log(ratings);

      if (ratings.length == 16) {
        ratings.sort(function (a, b) {
          return a.pos - b.pos;
        });
        polygon.setAttribute(
          "d",
          "M" +
            ratings[0].x +
            " " +
            ratings[0].y +
            "L" +
            ratings[1].x +
            " " +
            ratings[1].y +
            "L" +
            ratings[2].x +
            " " +
            ratings[2].y +
            "L" +
            ratings[3].x +
            " " +
            ratings[3].y +
            "L" +
            ratings[4].x +
            " " +
            ratings[4].y +
            "L" +
            ratings[5].x +
            " " +
            ratings[5].y +
            "L" +
            ratings[6].x +
            " " +
            ratings[6].y +
            "L" +
            ratings[7].x +
            " " +
            ratings[7].y +
            "L" +
            ratings[8].x +
            " " +
            ratings[8].y +
            "L" +
            ratings[9].x +
            " " +
            ratings[9].y +
            "L" +
            ratings[10].x +
            " " +
            ratings[10].y +
            "L" +
            ratings[11].x +
            " " +
            ratings[11].y +
            "L" +
            ratings[12].x +
            " " +
            ratings[12].y +
            "L" +
            ratings[13].x +
            " " +
            ratings[13].y +
            "L" +
            ratings[14].x +
            " " +
            ratings[14].y +
            "L" +
            ratings[15].x +
            " " +
            ratings[15].y +
            "L" +
            ratings[0].x +
            " " +
            ratings[0].y
        );
        var length = polygon.getTotalLength();
        polygon.style.strokeDasharray = length;
        console.log(length);
        console.log(ratings);
        polygon.animate(
          [
            {
              // from
              opacity: 0,
              strokeDashoffset: length
            },
            {
              // to
              opacity: 0.65,
              strokeDashoffset: 0
            }
          ],
          2000
        );
        polygon.style.animationFillMode = "forwards";
      }
    });
    n++;
  }
}

for (var i = 0; i < point.length; i++) {
  point[i].addEventListener("click", function () {
    console.log(checkIfArrayIsUnique(ratings));
    if (checkIfArrayIsUnique(ratings) == true) {
      this.style.fill = "white";
      this.style.stroke = "black";
    } else {
      ratings.splice(ratings.length - 1, 1);
      alert("you can only choose one rating per flavor");
    }
  });
}

//check for duplicate values in array

function checkIfArrayIsUnique(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (i != j) {
        if (array[i].flavor == array[j].flavor) {
          return false; // means there are duplicate values
        }
      }
    }
  }
  return true; // means there are no duplicate values.
}

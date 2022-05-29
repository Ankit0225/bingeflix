
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
<b>Web Application Link :</b> (https://bingeflix-seven.vercel.app/)
<br>
<b>API Backend Link :</b> (https://bingeflix-backend.herokuapp.com/)

-----




![<b>Trending Page</b>](https://cdn.discordapp.com/attachments/926055068271251467/980163620082155600/unknown.png)

# Demo

![Gifs Video](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xx1eemzfyyhiumh8h1rl.gif)
## Movies
![Movies](https://cdn.discordapp.com/attachments/926055068271251467/980164721212817428/unknown.png)

-------

## TV Series
![TV Series](https://cdn.discordapp.com/attachments/926055068271251467/980165029171200000/unknown.png)


-----------

## System Architecture

![System Architecture](https://cdn.discordapp.com/attachments/796397516643368961/980373711725142016/Group_76.jpg)

--------
### Prototype

https://www.figma.com/proto/Dt8RVdVk9s6BHbshuW1I5C/Movie-Recommender?node-id=53%3A96&scaling=scale-down&page-id=0%3A1&starting-point-node-id=53%3A96

--------
## Algorithms Used

1. <b> K Nearest Neighbors </b>
2. <b> Heap Sort Algorithm by Heap-Js </b>

------
### Working Content-Based Recommendation System

It is a very basic common approach for implementing the recommendation system. In K Nearest Neighbors, we try to find the most similar k number of users as nearest neighbors to a given user, and predict ratings of the user for a given movie according to the information of the selected neighbors. So the algorithm has a lot of variation based on two points. One is how to calculate the distance of each user, and another is how to use or analyze the nearest neighbors to predict the ratings of a given user. I implemented Euclidean Distance and Cosine Similarity as the methods to calculate the distance, and tried various ways of analysis to predict the ratings like taking average, weighted average or the majority among nearest neighbors.

-----------------------------------

- ### Working of Cosine-Similarity:

 Cosine Similarity is the measure of calculating the difference of angle between two vectors. Becasue the length of the vector is not matter here, I first normalize each vector to a unit vector, and calculate the inner product of two vectors

![Cosine Similarity](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAACSCAMAAADYdEkqAAACrFBMVEX///8Pyw8AAAAAxwCu6K70/PQAAFIAAOQ8Tnzf4ulZV+rh4ftmZOzp6Pzb2/oAAFOBgYGJiYn39/fg4OBbm9Xp6ekfHx/w8PDMzMyenp6xsbGPj4/V1dUZGRmYmJjuAABGROlfX1+8vLwAH2QArDN4eHhFRUVbW1usrKw6OjoxMTEGCg3+8u7BwcFnZ2ejo6NPT08AAFo4KV47NzD3qI6VnJUvAAD2mZH5u7UmJiRIktHSy/bGv/T4sZv5w7OJj4r84tkeFhMAqUDCzfSlte8lHiz4MA/4zrdnWUhIRz/Gxbjm4tFTIAA8AADzcGMAFl/QJiB+Rh2nn4wdAAAmAAA/NCYAqVVpuZODq9IAqymaiu2yp/Dybjj71Mj0h2DyYyKey7r1lHPxWAA3LR9/wKNVSC+hkXacm/L0gHU0KD9Osn5/meqoufD4sqyJla5qeZn1to30r4L04caeqr4gOW+4w9FOYorBqZO8kVfdy7k5TXuCbF7ToGWvfEK1gFWiYU9nLCZ5UivCl22FZz6JS0JeNDSZinicdR1SORwfGgDwxXKUe0B+ZEVdWUnPn1b93p+yoHdsLwBtRCxiIADSrX5KJQpxMgCAUTRnOBY9EABWbX3adU7AZS/bhUNIGwBFBgC1OgCacFnVbWzTvaA6NRiiWjZyEABjRjbmfRORMgCQQCW7j3KaSxfbdCA3HAi1m5NxZ3asSwDQjWXSejFrZkutgYRaUmQ6ISPBVwDylzSEXk2LJRtkFhONfFicHh2QUSLTTEjXjI04rnHfr04FAH8dGbS3cjovKujQIRp4d+3zekx+UhDyVURmVTK3lklQMSGfqHxaRBN1QEswHT9HmJFvS2YMVN9ZgOZphubIlrhJkrOZa40glns7ObqpYW18Q11jDz6GGDdaDkDSn6N9xi/aAAAdLUlEQVR4nO2djV9TV5rHz5xZtBSDyY3hhpBgSc37C2lDbCNviSDkResSiGXQWJgIrUIromBpqq2yZmglraNScQarDnaoilSnjHSq1Bl3t9VW1nWmM3U63ZnZnX9kn3MTIIEgeQ/TDz9IIDfn3nvyvc95znPebtAPlpQcoXRn4HurJbLJEvrhkpIjlLGk5AgtaUlLWtKSlrSkJSVeGomWI4S/wtDNXB7KVxpDt1Gz0oB4EqI85g0hFdWJ8yQSNvnLkUjEUe34T6ICzNZIsADpMDt4sxBjWoxFoWmNOBeA8EK2yXCOphBjCUL5OGd6ax698Jm5Ioz5CPExVkSQ+p9OfKyEZzYHiQtCDJKScBB3NtlCLRfxCI0gcXABPOfAdeFq5VMbhZgbwbmlGGsR0jLP3z8JMOZwSSnmyflIk0vn5vF4+flcRPFzGbJ0YW6+ACFarqHzeNxCrliKtfLcvDyKy8lnDsDBMv9haFoMZPl5HA2SK7BEENgTaeQUOSCi5JxCsE1eLmfqAigkGFMUljBkNZx8IZwmP1dOciPg5HERP58HDyES5lMC5tB5/LCfYXGKwkRaHhJhNngApRaLyAdGcox5hCyfDUkUSIKlIpynwrl8BWbzOVgHXPzew0+WCwUbdoVX+Ros1BhxHl/DRjSWIjEUdgUQpEVYoMRwCbRippiAlELYlsvhAFlKgcUyzBeCUyE+RYE1uZjKASeVg+U0xgWQowIsl+DC9JFaUB2zXtMcKJTARACuUofFUEQ1SImF8GDIIoFOoYKyjXEhFzxpPnxAPtACD6DzVzszZHmQnJQAKAJS4g3kZE8eOGcNvAbuuVAAgBKww/5TK7l5WKrisYEsG5jlwUOsU4iwEI4mp4WIuP88eJACwZVD/sShdUGUUsexbwzH59KknGLM9ZPVQI0kBJOZJqvFHLAnQpaHpslyMQQNAVfqJwuWSRGyeXCVlFwgKYQD5VFKSEQesBO5Yoxbz1VKAx5dKQTQUkTIKjBHCweXMJkQEg8MF4+Q5cBD7HfHErZKkmQ44UVlxrKXToEYlxCwWX4o2RwgSoOjmEUWyqiQFzC8PIasEvYmZBENRT6XsVlgjYjNBshqSUmmwOFAbMb3xwJKIfASM2RlmA3b+ORMRjg54ubCxQ4hC1cQUmgSBCsqZb4Sy15crJDLlWBPuWAkSvgY4OIApQagCDUAXIe14OTyERMgSaA0yrCED15YqvVXYJBAJchVEccL1BATvpFLwxZCVScDHwJ7EhsU8DDWiDEUfalAmxM4NfgHOTmCgniT3EKs0eICCBXy+JjLg2KRi7UQknHggkrhkokwR5CTlzBcUWjvvtj2E7PZpM7mcNhcNieX538UCtkcQSGHDcTZfDEnX8PhFCKKw4HojMPOI/U09jcLIC2HzWYqbTmHLaTzJFChQ9XOzkX5bL6AkwsHldNsCCToXEk+sUsOO9AugPSU/whsLrhgNgmUC9kaDScPCdkSEiLI2XIhh02TrJH0bM7clkoq1LUyJncQiygNVyFI1cnSLnrzyr2pOhepu1N1rvSrc+XmrukX9PexuZgu7V725FPTPD8KfY+335bq7CxWgS+nhl7tjmYX6rUZP0t7yNPlqf2pA68fWEIbEK/79YNvvBlV9PbYsmmyHxGbbTnUc9hvxN0dGR0tic3fP6u4dntPzxv/Nh5VNRFE1kIuieOQ5+Bhpp3UnZFh35/gLP7Tiuo5ord4IumKm1YwWVL2bQcdlqEOPoSFdnuGfckbBMQ77bQ6vN5oOumDyNI/KYdDHB461GvLsAntQNaWnhh7EYpX95bVc/jtaLpngsjaj7ZYwAkMHejrBXMlskU3kPJ9FqXxHT3wzrtR7BFE9liz96fHeajj1W7GEQx1dNiW0M6Ib+09+va7kc8xmiFLHfUNDNScyKU7MjIybI7u/Sc7bAamsb7UgGAk8PVOnrRHnHyGbPfRsf6BmlvvHc+wZ3jf92xsOeZg+5rJYN5iGO0wRVUvJ0W0XXIqiq7eGbJcg29T/8CtmlPgCU6L2YL3Duh/JjhdiFB0wUYyRP188ExPujOBqG7b/vcir9OD/CxCwuH3B2res9v7ajg/y+/J8MjuD0BwfJY3/+6pUfW5wY7uj9Lu8212TRRGFkIWYtr3a0b22/cfOHDgfEaGw9vn4XF9nkTnMGqpz52znz97Kt1obRHH988+99xzT2/+xXOuoG2WjTWnbPahw5cNcq/TUM52rr2QFmfQkWHqList6zYhk4lSf/DLkY7htUPpyAh4gakrKrR3R1iZP7N69eqnn/zX1c8GH6a/pv+UpFBgMNgF5ZKC0f7+C2kxlc8/vHju4rlz185cuXgWalDhiZ9f+uBy6oMUimvvgBjJZhOAg+XZuiM02pfD2CzSnB6oqTHqCrSScu39uv7+fm8ycryQ7Jc/vDIycuXDgx2XP7notSPKfPrEQU/qgxSB1uH1tDgkEgmZs+CIJsCf5WdBw0C2ZlQpM9pG3XWjdRfSEc3Sl49eufLhhx9fPjZx6tKlATv66GzNpXSQ5el0MplOKtMyY2oCmyPyLMwlK99YU3OrZtTc7xmty0PitHQddH984NDglcHLPZ+fuXTpxCE1ujUyOHL+ahryItBJfT1jPgkTH/EdDkfEgVJwjwyPZkZFN4LRjh8fOD58vzZd41bd1669fu7atY5fjYycONG/X33mypXBDyRXo+rUT4Qo+9BBn1Eh9fprca7D4Y2493uGrBD8tM2eQaH7AwMqcAj9o2YyISMd9Rcl3HTi8vlTl8+fr7lv8Xh+dQX0sfdq6iNa3tH9PCRQ6N/tYIAKgawk0kxMk+XahEICd+igE2PzqLm21mzGtcN9x455Uz4DmMrs7u4/3nP+vMcy3D+AT48MfvDp1atXkz3FKkxGmErG6hubePPXQNRmc7ALIq13psmKbXxAa7df/uo4NgNXAGs214yefPdoWgazabx22GLRXZX147ra4evXr+anrfdCc2FszD0+/vtuiL4cEl2k+ZgmKxfYCNuhAwd6MEFLwA7U4Ilj7nSQFeowrqurw2Yp+SsTpLO7zevzjY2D3jwJZLU6QYT16AzZQkBrEx47cOCwp9Y82j8w0N9fU4PxWzgN1sK/dmWw5uzp02fPYozX1qZ3QcIQvuAmZI8c3m+Q6GQ8bWSN0mmy/PJCuUBs6zlwYKhl48AAxAcD/TUDGCtS3x/T/fknnwwO/qbmxs1f3gSwdbWRd4omQxTFGYUCfOTIpycdMoVPLtBGVIKmyVLl5QaD3NvTM9HdN1AzQNQ/sFGaenPp/uDatcHBSyPDp2/cuGE2n91Uh9M9HHdk0k3IHpk4NjZmOSIoiCg+mIm6eGwJp7zv0KEJLzQUiMkO9L+f+m4u0wefQOw6MvCeFgPYm/jmjU21OM2DGuK1QHYcyI5PjFnHzXVWY34EewW1FCiBxNfb2+sV1dy6BfYKZNem3MN2Xxz8eHDk0sAJDY1vfPZZrfmzG2trC1Kdi1l689PmCwTskZwJa+242dysjGRZT0jrlhJ7enubzcdvgdH29286nXJX8NFFcAQjl2pOaBCv9uaNm2Z41OE0jxZRp046e48TssNj+nEgO6ZvjmC3x2bPn6UE2HwLNHA/N+VNnjfOXfvkykjNTwEsFMEbn63FN25uqhtPdTZmiXuyeaynZxicQd8xCBLMeGxscoFdXr53797TT/72zrMhW2mMR/tH3Tj1zdpfnftk27aLIyOfknBEevbmTXz2xtm1mCk5Qrcl5b0GAaknjw339vT0Hhn3+XKALD/XO7HALuF6vkFCrU5WLhlNebXx8xeubNt2aWSEmWwqxJvOjo6Cya7VMW+S5TeX0xR9TfQdOdLbc2iyd7IZoq9IIhXXM888s2/z754xJT1vkaj6QwgKBj+ouciQxRis9Sb4gqkVo3zdhk8PpcdsJ4iPHe+dnOztdbrdb0U4ejW3f9avlK1emJbwIgRbIz8dziduSDvqHFatPXt209qZVXLiDc70xF+CifukDVbrBK7ucXeEeZiHbOP61KMVy47USv0g2bXO5r6+Yb1+3BzUBMxTHU+LP+AUOpqBrHFizGweHx+NsFEaniy1a31jIvMWqQK1pgBjs3uyubnZacbY6fnI5v8wkuvH0xKAcdmI7+11O32+2vFxd3NcZNHtXYnMWpTik842KHqku81svN+/8f2NJFwQY5ym1piGzMEqH2v2+Xxjgkj7UcKT5aXHZP3iEItlsGKsMvuFpUItvq5M0zwoWkeuKC3g5GyQcKMeUwhR45rUu9mA+EowWLPbjGfp+nWsSNcEM97167Lc/HwJp0DGkUfaMA1PdtftRGYsGkmIJ2DMVaFlW90zZDmR9jgnQUIejwe+XxXr2poZUet3JCpTRIWRrwnVrh32g/V31FF8gUDGgLUmMkOxyKgSkSXSkSssWeGaRJQ7SkwztT038hwNHXi1Z5h4gqBrwXEbjUbl/YMJyFEcokQqkUoZzR5hyT6/JRGZEeMcmlnvYIu0Ou1+5+233zk6iUN7tyA+0Lv7f5n6kdsQcfBb0Y0HhiNLbXk+IZkR2uxTioit/d/ffufViRaLNTS2EsoKtFptJJ3NSZX4P/4zqvThyHLXNCYiKxkZ/hU6doFcLI4gEG3/zTuvn2zxWBfr3aKWfxFV8nBkG9cnIiDPmFr6VIBVBvnCFbv99bdf/2Tw81uyBJw7KUoA2cQ0wAhUMvGUrWSLFPKFjZYaPlu38f06WdpXRcyn+MkmqAFmtztUEp9CXm6VqrRywcJzemkuj0ele8b8IxQFWRfotaf+4Zr1aRrXJ2KKAQ3Vl8dnAMM1SMoFckFaJjgnVFGQvceMKdxZbQrdnJgGGM9rtxWybRM2W3lhubzQ4PMs6Go7OzsTceZkafkTESe9t7qqiozWmEK2JqYBprHqDQaD3O41O8sNhYUGmdFo9S7ga+vX1SfgzElTFGTVoMdWCmeF4IlogNFep16vNMhtdlu5gUiHRaIcveWRZlu/bt1itlkqCrJEc2uwHVvirkV4FgLWmKM1GMrJL1uJVSqRSKS3zN9zTYHFdi7mFb7xk42/AcZrtgJYIIvJGh2tVgFcGeVYLfOVh8xVi9sVELKPR5V+DtnMuBtglMVqZUxWpRQx/VQBrka93jrfgsjOxe0JiFjxkm1cH68z8Pr8JgsslUql1jhFVs+QdYTbZe+6dWnrao9UcZONuwEmtPjJ5qiwqNnr8flkUoCLc/TEkq0eSxhfWr9u1WL2sH6xlq+IKv1ssvE7A7bP6pfeqLPbfFaZoLxcC0zBZPVKvdUyZ7SDBhe7iJteU4qXbPwjYACWYQssrQ6n0f+Swao0gvSzuwMz1y32usuveMnG3QCjnAxWIvJs9BGk5EG45uQYlbNuaxFf3WVzOLwp6sLJio9s/A0wyqkPktKoz4Env7kCWEAbShZcbOyFpPvYhAdcd2pcSdbyu1Gln0VW+KO462i/vYKN6glOETzlTGMFqYKHG6m46i77Sa/PK9XpAy27JAPOjo/sjjkjYFtLtk79lzW9sXjrVlZg81aqIfAPK5v5W2gmWP1WmqOSSnMUspxprjmi4FG6+JoHdoe3wKiwKvxkucm+mXecZOc0wF4shqfiEoRKWFlUcUk2yoL/0RdgIVlZxSXwIhutQCXFkCSL9QT8zWYhrcg4ZaQqY4GWfEONUiVisIpUqqAeyjibB0M9WoVUKVX6h80kOI5DRaL4yGb+qDHoVUlJCUW8dslW1t2GLKqB9QVawWpgwabiJ7JYDWDNL5aU3EVwwoasJxB5YwV5AR9SBRThV6UEruzycja7gGkvYOZO8VOaah6oy0rLpraVmUpN8BxyL4t5lDFUIFUojVI9h3nptdioiGcGxaL4yIY2wAjZu7ChgYVWUCtKXgR0DSUNxUyhfyKrYSurpDh7awO6W9zQkLWCIVvyIuMj+AWEo0ip0xKufkm0Wl9+cDU+7WJN20wmtQuVIXWpqchVplaXNpUhgF1W6kIuV+l8ObdPSKVut1XGdPLQ+7uHh4Yc2iSiLV7eEFX6ULJzG2CsFcVgsVtLiktebGA9ge6y7oJHQFuLG8Bms0pKirfeRStKtj6e9Ti81VCCvvB/NDu7gAxl+7kaDAbmj/xg0OcmzQNTU1MTWKfphe1Fpia0DQi7ilxNpi9NTS74KTO5XlBvc22fz36PGa0FMqvWZydHtR2zez3eckM+jZI1ETQusnS8I2BTtZndpiX+le3nGlBf0H2CmeaBuqyszARkv4RHE/rStR0hIOv6Egz2S3hne9k2Nfk//KloX4GMXD2rs1dDdQ95Hb4Cj15rMIwla8VjXGQb4425SgJ/7XabZNpg/Sof/urYdDp/3aU2gRsAqj9ualK/UPqCentRaZFru2l70XZXaVNp2bYysFmqaB6ySKD1kwWf0Hyyw+uRQVvPZnc4kzUDLBqyzKqlzb+9N722JmTWER3Hreq5NpstlOvEwFeHTk69Pat5QFEUUpMybfK7CzLIoVaT30eegyEr1Sucemdfh8PznlNncVi8vrCdaQlQNGRfCoyDvRx4TW2ZboB11nd9W793b2eMNkwdJjMNprF6e2q+Gp7sCdzJjDQPElHTOMAdWKVuo8LtdrYMeSb7pFaJROdYDGRn26xwTcBFdXbt9g+cUJ0xRvJDX/V4WxzeFs9EX9+hga+OH5qcnPzKv3yDN6d5oC6CIm8qIv/OV/TDifbKdDqr1Ah03e4Wn6CnV68f1mqTNfxeEoefDYyAUfVdM98LkrkuJp+Q8V9HJ3t7ex/cfwDPvYcOEbJHmXfAxc7+1hETeNMidRkAdv0YAq8itamsCKKwJpNpXifLqFsCaHVGqdXtNvo8H/VPOi0WjzVZHTQly1+MKn0w2dtMAyxzd1dI42FdTCX3v48eBZhkfczkAwK2r6eHqcA6w4wemLYhCK+amkrV1AuU2gSVV5HrS1eTGuKvL02POAc1BGhlBQDWbVR6LD6pRFtgTZYziIesv9M7s+vbUJT1MTmE7p8c7ZlsJmjBZp3Nkz09D4gxhe3aArIQEjSpi15Q/xiVQoBQVqaGsIvgdj26Fhvyyqx6AlYla/nr7y16bXnyFozFQZZZXTcHLKJiGqJStzwAtMRq9U4C2E2+Bw2aB6vCpIWwa7va1VRUup3aVlTaBF63VL0NbWtyFUE49siz0IfMZsZijZzhN37/qU7qW5RkSac31fXtnCT14WgsrAIMrqD5gogZXRSpMLXg6AGhGHRZI/FCtgmrVaeTKpQO77BnlIQGMeU1EsVOlmmAfds1t8LKjHFcVcYM2ooUZA4H+brLpIx87/cppDqpVCG1kSa0wWFIWq9M7GTJCNjernCffVWMoVeh1eobGysg3YlSOnNV4ke+aSE9ZAGqUiOYLbtcAmQdnqGhyO/MH41iJwsNsMyusF/DFqM7QGis2erzwa8Pauy96+oTPPLNy2v2aSUtHgWgBZ+g1TJkZR5rcr4TpmT51oUTBWnmrlLQAPt2d9g0nbEFXqjlJw96m31uJ/w8ENavSrAroD0eS4u3YP8YsVirjHQBEW9g1VqT4w9iJitcw+3sCl9cY3W0Qk5eXr6YX8hhszmJv5+azePx7N8vKWjxWIGsj5gs6afQy5K07HlrrGR3bMnsmsefUjHWPNR3yZyrZbP4fN4hj26ixQfOwMM4A4NBorAKkjPWGDPZLc/vncdkEYqBLJXZuGvL+i1JnFTE9TjdYv4xr8JrgeDAJ2G8gUErM/JanHOmiyRAsZKFBth8Jht9cJDZ+PyWNWvW376d1NlaNLlTNk9cbmnxgT8Ad1CglficVoXPaXbjxN9qLFayjevr5zXZqMgSquuB6g4ulZmSaXDlvmE9kNXJCNqdT//hD0aj212b+C/W3bq8Mqr0U2R33X5E+yhSshR/x+31a9Zs2dGYyqmFbAtz7w69Xm/esHPnBmjsmt2jiSf74vKShRMFKUCWXv/1/CYbGVmhn+rzjSmfCetxj/rv3CHasGGn0el2LyayjWu+ndthMK0FZ7JAdUWo7ko9VSJbrx/tBiK30+kUGZPgDaIhOzWm4CINsPDNL0b0I2ODQHW1a0faZm1zPx0HquAIiIxAttk9mfjAKxqyQXfv27Jjb3gwzDcszEt2KgjYIUzn1OJ8gLpzZ4CsCMA2P0hCZ2I0ZJ996aWX9m3+xUsuxP3RfIP09fWdVPg2GM041vW3n29M94Ttwj9umCar2mBsbh6bBywr8Jh+ETbNPG80LC+OKld+Pzv/GrDMdetWrZpDluY2BqqrtH8rG+jPG6bIqgjc8fl6ZKg/sVD2n6ZefeP/U8FCIdFUK1UBz6y2OXvHRvb2/GvA6lcR1c+Mj1NcaF0x1VVSJ6hFLuqPG2Zs9g+KwjARH8VigSVSrZWotRW1VbJa21qpbypaUUVldmtlxTesisqstspWSFJZcRe1siorKh5SFZWsykrgXJmd3daKYiT7qGUfmesYtIHOVV6gHbBYqBLxN+xkyMLTVXn4kVs/WbqykkCqqKxopdqyHyLyb2VbFtWKsitbK1nZYKet8PMwq5ViVZL3gGvFQ7Duiod0jGQfueyDMVqy+oXmP8841h3CRbbE6C8BPyuZd0CcVVEBZZxuZf0JPcwmeP1ks1rBerOpVgr++sk+BCfxELG+YYFdZ02TZY7RsDw7qlwxZB+57IMx2k5/dbVIHOss/dlvs6qFZhqAB20jP21ZFSgbPCm8bKugKqk2VhuQp8ic9YqKStQG1wFVstrasiuorCxWG/wS13s3BrLUo6cgrlr1LeNYFyVVEPUXFWOySb4dZSxk+Y+Yggitq+++g3ZA46K9vQti/RHIAtuo7gAXvWIhO9+Nz2baAQnIWPJE72RsdoM+uaeJheyWMGvAMsGxAtUt6W1dRSYJZpq2Sf7GyBjIZs5ugNHT3VaL07HOEUG7wZrkL+aNgeyO4GUfM+2ARb8sPkhijiLHeSG5TitqsiszZ5Z9+McDttyOo7p69mVTzPvGJa8+iu+pj0XRk+30x1z01CgL/07VswvsNK3n7r0cukFdtXrWFvTsnXuzpr2p792Zs2AGUsXh0GFXsU6SXN+1YnnWwomC9NhTX69n+UdZSDuAZuCEI/vSS2GWD83hSIUhu7pqNtkwZ3h5ddUCZKnMRyXgY4yNSa1soya78vZtcKwBqkTzkJ2LLOzGuTuHJTvnKk2RpYJFT4vHozufevKx3Xs75+HLxiIR/p8npvR4FFoRmb6Ijiz12uavv1u/6+vOzGnxq6r+0TlHe6uqfrd3ju5U/fWVEO2GLbtn1AX6W1VVl1+PTamq6m+vBbQvIEgFz08GtJlo2bKVT4FWEi2DF2TzspXLVu57bPcrc5am5BKyXyxPqqIimwnZfXIzZH/ZjKqq/r5sru5U/e/KCDbO3fJ/VVWzd6uq+j9ItDJYf4dUK2frqZWBYzGkIavAevO+LuDKm225lAzjfNb8yopC2fMoOmezb+WUnTw5ZT5gUfv2BUwKDCxgcGCM8Lw7VHNs9hXYEmrWnb+uqhKE2r8mUCoyg/SP1VXBLzOn3MC0Z0Cdm/fN7wxA3EXWAxdmOV0Ufvbe6mcWTOaKqAab643jlamaOaAp7HtpaViqq8JGXXfC12Czyb48J559dvXq2WRXhyM7O1Wcajeh6mr4u4e8qJ6VqaCX6vaEnjYGzYW4qGWqbm+v3oP2VJ9B1e2mPe3q6j1UR3W1qd3U3g4P9cfVJtce9ZnqdtcZNTLtqVbvaa+u3rOnfY8p5VldaAHRIlM1OANA2g42Ww3MTAiYucr2uPagdjUC0GeA/Rmw1yYENnsGTBu2Vptgp7Sb8GIX2Cz8qPegM652Vztjq9Vgo0h9pr0DzBb+O4OuAMYzgF5NPIdLDWQ7lsgurHaXugNKGvhaYrFgwNVqF+ADdLDJpIYHbIE3wLpdwBUxW9Um2LSkBTTfIv7SpHm1f1lScoR+uKTkCP1gScnREtlkaYlssvT/8ZsFzs5ESK0AAAAASUVORK5CYII=)


 ### Article Reffered for KNN Algorithm
https://cs.carleton.edu/cs_comps/0910/netflixprize/final_results/knn/index.html


## Sorting Algorithm

Using Heap Sort the movies and TV Series get sort within no time using Heap-JS
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

- #### Backend
1. Towards DataScience.com
<br>
https://towardsdatascience.com/how-to-build-from-scratch-a-content-based-movie-recommender-with-natural-language-processing-25ad400eb243

2. Towards DataScience.com
<br>
https://towardsdatascience.com/build-a-movie-recommendation-engine-backend-api-in-5-minutes-part-2-851b840bc26d

3. Flask API
https://towardsdatascience.com/creating-restful-apis-using-flask-and-python-655bad51b24#:~:text=A%20Comprehensive%20Guide%20for%20building%20Web%20APIs%20with%20Flask&text=Flask%20is%20a%20widely,scale%20up%20to%20complex%20applications

4. The Movies Dataset from kaggle

https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset

<p align="center">And</p> 
<br>

https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata

-----------------------------------------------------------

- Frontend

1. The Movie DataBase Organisation
<br>
https://www.themoviedb.org/

2. Mantine.dev
<br>
https://mantine.dev/

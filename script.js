const t1 = "The National Basketball Association (NBA) is a professional basketball league in North America. The league is composed of 30 teams (29 in the United States and 1 in Canada) and is one of the four major professional sports leagues in the United States and Canada. It is the premier men's professional basketball league in the world.[1]" 

const t2 = "The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA).[2] It changed its name to the National Basketball Association on August 3, 1949, after merging with the competing National Basketball League (NBL).[3] The NBA's regular season runs from October to April, with each team playing 82 games. The league's playoff tournament extends into June. As of 2020, NBA players are the world's best paid athletes by average annual salary per player.[4][5][6]"

const t3 = "The NBA is an active member of USA Basketball (USAB),[7] which is recognized by the FIBA (International Basketball Federation) as the national governing body for basketball in the United States. The league's several international as well as individual team offices are directed out of its head offices in Midtown Manhattan, while its NBA Entertainment and NBA TV studios are directed out of offices located in Secaucus, New Jersey."

const textArr = [t1, t2, t3]

// Generate random index

let index = Math.floor(Math.random() *3)
let msg = textArr[index]

console.log(msg)
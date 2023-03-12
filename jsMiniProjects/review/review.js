const info = [
    { imgSrc: './coment-icons/images (1).png', nickName: 'vasas', coment: 'A serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary' },
    { imgSrc: './coment-icons/images (2).png', nickName: 'kiler009', coment: 'A wonderful serenity has taken possession' },
    { imgSrc: './coment-icons/images (3).png', nickName: 'agentparanoyya', coment: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the my trees, and but a few stray gleams steal into the inner sanctuary' },
    { imgSrc: './coment-icons/images.png', nickName: 'sarah17', coment: 'like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary' },
    { imgSrc: './coment-icons/last.png', nickName: 'Real Gentelmen', coment: ' taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary' }
]

const image = document.getElementById('image')
const nickname = document.getElementById('nickname')
const comentText = document.getElementById('comentText')

const back = document.querySelector('.to-back')
const next = document.querySelector('.to-next')

let idAcount = 0

image.src = info[idAcount].imgSrc
nickname.innerText = info[idAcount].nickName
comentText.innerText = info[idAcount].coment

console.log(info)
back.addEventListener('click', function () {
    if (idAcount == 0) {
        idAcount = (info.length - 1)
    } else {
        idAcount--
    }
    console.log(idAcount)
    const item = info[idAcount]
    image.src = item.imgSrc
    nickname.innerText = item.nickName
    comentText.innerText = item.coment
})
next.addEventListener('click', function () {
    if (idAcount == info.length - 1) {
        idAcount = 0
    } else {
        idAcount++
    }
    const item = info[idAcount]
    console.log(idAcount)
    image.src = item.imgSrc
    nickname.innerText = item.nickName
    comentText.innerText = item.coment
})


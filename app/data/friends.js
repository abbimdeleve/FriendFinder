const friendsArr = [
{
    name: "Frodo",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flotr%2Fimages%2F5%2F54%2FUntitledjk.png%2Frevision%2Flatest%3Fcb%3D20130313174543&imgrefurl=https%3A%2F%2Flotr.fandom.com%2Fwiki%2FFrodo_Baggins&docid=0eaSK1Z_dA1gvM&tbnid=gATY058KzTwL4M%3A&vet=10ahUKEwjFpYC-j5fkAhUFy1kKHc5SCPUQMwh7KAAwAA..i&w=1028&h=754&bih=678&biw=1422&q=frodo%20baggins&ved=0ahUKEwjFpYC-j5fkAhUFy1kKHc5SCPUQMwh7KAAwAA&iact=mrc&uact=8",
    scores: [
        5,
        5,
        3,
        3,
        1,
        3,
        2,
        5,
        4,
        1
      ]
  },
  {
    name: "Sam",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstuffrater.files.wordpress.com%2F2017%2F08%2Fsam-gamgee.jpg%3Fw%3D730&imgrefurl=https%3A%2F%2Fstuffrater.wordpress.com%2F2017%2F09%2F07%2Fsamwise-gamgee%2F&docid=qCbJ_BxUcvgOdM&tbnid=QvXvWk8uKJ3LHM%3A&vet=10ahUKEwiz84-Zr5fkAhUFpFkKHTIbBFoQMwiDASgOMA4..i&w=500&h=391&bih=678&biw=1422&q=sam%20gamgee&ved=0ahUKEwiz84-Zr5fkAhUFpFkKHTIbBFoQMwiDASgOMA4&iact=mrc&uact=8",
    scores: [
        1,
        1,
        1,
        1,
        1,
        3,
        1,
        1,
        1,
        1
      ]
  },
  {
    name: "Gandalf",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.thr.com%2Fsites%2Fdefault%2Ffiles%2Fimagecache%2Fscale_crop_768_433%2F2012%2F09%2FGandalf_a_l.jpg&imgrefurl=https%3A%2F%2Fwww.hollywoodreporter.com%2Flive-feed%2Flord-rings-could-ian-mckellen-reprise-gandalf-amazon-1069426&docid=KJHBw-1QB0gCSM&tbnid=ScxbfJTBXwDYcM%3A&vet=10ahUKEwjsutO5s5fkAhUBy1kKHRVBAbQQMwh8KAMwAw..i&w=768&h=433&bih=678&biw=1422&q=gandalf&ved=0ahUKEwjsutO5s5fkAhUBy1kKHRVBAbQQMwh8KAMwAw&iact=mrc&uact=8",
    scores: [
        5,
        1,
        1,
        3,
        1,
        3,
        1,
        2,
        1,
        5
      ]
  },
  {
    name: "Aragorn",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flotr%2Fimages%2Fb%2Fb6%2FAragorn_profile.jpg%2Frevision%2Flatest%3Fcb%3D20170121121423&imgrefurl=https%3A%2F%2Flotr.fandom.com%2Fwiki%2FAragorn_II_Elessar&docid=zb_JBCnfbPlAnM&tbnid=PXIm0_9bnUt4sM%3A&vet=10ahUKEwigronSs5fkAhVDxVkKHW9zBOYQMwh4KAAwAA..i&w=500&h=750&bih=678&biw=1422&q=aragorn&ved=0ahUKEwigronSs5fkAhVDxVkKHW9zBOYQMwh4KAAwAA&iact=mrc&uact=8",
    scores: [
        1,
        4,
        3,
        3,
        1,
        3,
        1,
        2,
        1,
        3
      ]
  },
  {
    name: "Legolas",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPjQ_ZIkEpqE%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPjQ_ZIkEpqE&docid=KP0u6qzROS6S6M&tbnid=1qqZ7kw1A8ABsM%3A&vet=10ahUKEwi-_9bms5fkAhWOxVkKHRq8D4UQMwh8KAIwAg..i&w=1280&h=720&bih=678&biw=1422&q=legolas&ved=0ahUKEwi-_9bms5fkAhWOxVkKHRq8D4UQMwh8KAIwAg&iact=mrc&uact=8",
    scores: [
        3,
        4,
        1,
        3,
        3,
        3,
        2,
        2,
        1,
        4
      ]
  },
  {
    name: "Gimli",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.geekfeed.com%2Fwp-content%2Fuploads%2F2019%2F06%2F17-Nick-Offerman-LOTR-Gimli.jpg&imgrefurl=https%3A%2F%2Fwww.geekfeed.com%2Fnick-offerman-reveals-he-auditioned-to-play-gimli-in-lord-of-the-rings%2F&docid=SlQjieC6hz8PWM&tbnid=qhSOJA6ZgRmqsM%3A&vet=10ahUKEwiKyK73s5fkAhWMylkKHViLDwMQMwiCASgHMAc..i&w=800&h=490&bih=678&biw=1422&q=gimli&ved=0ahUKEwiKyK73s5fkAhWMylkKHViLDwMQMwiCASgHMAc&iact=mrc&uact=8",
    scores: [
        3,
        2,
        1,
        3,
        2,
        4,
        2,
        2,
        1,
        3
      ]
  }



]

  module.exports = friendsArr
document.addEventListener("DOMContentLoaded", function () {
    const pages = [
        `It all started when I was just laying on my bed, I was so bored, my friends were all busy, the others were doing school activities while others were just playing. I was really bored and I thought I could talk to a new person or a new friend, I always thought having new friends was always a good idea. I then asked my friend named Jacob Lance if he had some friends that I could talk to, I also told him that I wanted to talk to a girl haha, well he told me about this girl, her name was Margaux, Margaux Arevalo. Of course, I started searching for her social, then I finally found it, I was like wow she's very pretty HAHAHAHA, well I started talking to her and wow. she's so kind, sweet and friendly. My friends didn’t really like it when I fall in love very quickly, because at the end, I’m always the one who’s getting hurt. They were right, I can’t even count how many times I got my heart broken, at this point, I didn’t really care if she ends up breaking my heart, because I was already used to getting my heart broken.`,
        
        `We started talking, asking each other’s hobbies, we were getting to know each other already. While we were talking, she said: I think I already feel comfortable around you, I was shocked, I mean we only talked for maybe like an hour? hahaha I immediately thought she was just playing me because of how she was so sweet towards me, I know you can be sweet as a friend, idk well maybe I guess I’m just delusional.`,
        
        `We started talking for a few more days and yeahhh... I really knew that I was into her. I was literally flirting with her, saying stuff like, I think I like you. I started becoming clingy towards her anddd... she started showing affection towards me as well? I'm not sure but, she did say that she cared for me lmao. She was saying stuff like I care about you, I love you.`,
        
        `Maaann, I didn’t wanna believe those words she told me, those sweet words she told me, I immediately thought it was all just a joke. I mean who will believe such nonsense?. We just started talking for days. lmao I knew for sure that she was just playing me lol, well I mean, after all these years the girls that I liked also said I like you and at the end of the day, they will just leave me lmao. Even though I knew that she was just playing with my feelings, I still loved her genuinely.`,
        
        `After a few weeks, we've completely fell for each other, I mean I really did fell for her, still not sure about her though, but I knew I loved her. My friends, came up with a stupid idea, they wanted us to meet up, me and Margaux. I really did think that it was a bad idea, I mean we only started talking for a few weeks and now we’re gonna meet up?. My friends really insisted and even Margaux, EVEN MARGAUX WANTED US TO MEET UP, EVEN MARGAUX WANTED TO SEE ME. I was scared. I'm scared because I know myself that I'm ugly. I told her I didn’t wanna meet up, I told her I was scared, I was scared of judgment. I was scared she’s gonna leave me. She then told me: Don't worry, I don’t care about looks, all I want is your personality*. HAHAHAHAHA I was laughing real hard, I’VE HEARD THAT THOUSANDS OF TIMES. I thought, oh well, she's gonna leave me soon so why not now? I will just make it easier, I also thought, I did have fun for these past few days, I guess it's time she see my face and say goodbye I guess? lmao.`,
        
        `And yeahh, the night before we met, I was excited?... idk. then yeah. After school, me and my other friends went to the meet-up place, it was very traffic, Margaux and Jacob were waiting for us on a convenience store, we arrived late because of the stupid traffic, then yeah, I saw her and I just stood there, Margaux was just sitting on a bench. When none of us were making a move, Jacob pushed me in front of Margaux and yeah, I sat down on the same bench as Margaux and hugged her there for a few seconds, then yeah, we started talking and I was shocked because she gave me her hairtie out of nowhere lmao, actually I really asked for that hairtie before we met, tbh, I still have that hairtie. We went inside, things were so awkward. Jacob asked me: why are you not talking to her? I responded with: lol I’m shy, idk how to be clingy irl. then, Margaux, she hugged me out of nowhere, I was shocked, I felt butterflies that time, I was really shocked I mean, why? why did she hug me out of nowhere?.`,
        
        `Then we just bought some random things, I asked Margaux if she wanted anything and said no. Then we went to another place, while we were crossing the road, Margaux held my hand, I was in shock. It was the first time a girl held my hand. At this point, I was in love. after we talked for a while, we went home, and talked in messenger. I was so happy to talk to her, and asked her if she wanted to meet up again, and said.. no.. I was so sad but it's okay I guess? she had her own reasons.`,
        
        `After a few weeks we lost that spark. She became cold to me, when I asked her if she wanted to meet up again she just kept saying no. then yeah. after a few more days, She got tired of me, and the reason why is because I was so insecure, I kept on overthinking. I was just so scared that she will leave me because I'm not really good at anything. I'm not smart, I'm not handsome. Idk what I'm good at.`,
        
        `After a few more days, she blocked me in messenger, instagram, and tiktok. These were the last things I said before I got blocked: arghhh I miss you so much. I kept on backreading our convo. I keep on blaming myself everyday. I keep blaming myself like why? why didn't I try to fix it? I'm so dumb. I know you probably don't care about me anymore but it's fine. I don't even know if I could move on you know? I can imagine myself watching you being happy with another guy, I hope the guy that you're gonna love is going to treat you right, not like me. I'm not good at anything. I'm not even handsome, tall, smart. I'm literally just shit. I wasted all that chance you gave me Mary. I'm so sorry. I have always wished that I could go back in time, just to fix all of my mistakes. Mary I just feel so dumb. I really just wanted to say sorry, for all of my mistakes. for all of that shit I've done. I'm so sorry. If ever there's another chance, I'm willing to make things right. But if you just want to move on and focus on yourself or on other things, I can't stop you.`,
        
        `It has been 1 month and 27 days since we started talking, I literally fell in love with you for how sweet you were. I really can't move on. You've probably moved on by now while I'm stuck here, still missing you. Can't we try to fix it? fix this? I'm regretting all of those things I've done to you, to us. I'm sorry Mary. I know I've asked for a lot of chances but I kept on making mistakes. I'm sorry. I'm trying my best to be good enough for you yk;( I feel so terrible. if there were a last chance, I would do my best to not hurt you. I know you don't trust me anymore and I know you thought I didn’t trust you but honestly I did. I'm sorry I'm such an overthinker that's why. All of those overthinks, jealousy, trust issues, it's just me wanting and hoping you would stay and not leave me. I'm scared, I was always scared. everytime you don't talk to me you kept on telling me it's because of your schoolworks but why do you need to be cold and dry? The way you talk is what makes me overthink honestly. I'm trying so hard not to think about it and I'm trying so hard to become positive even though it's hard just to avoid my overthinks because I know you hate me overthinking but what can I do? I'm just afraid to lose you. I sound so dumb saying these things, but I just really wanted to be with her. And yeah, we hadn't talked for months.`,
        
        `Then, March 28, I saw that she unblocked me, and I said I still love you thinking she wouldn't respond. But she did. We talked for a few minutes. Then I had a very dumb idea. I asked her if I could meet her one last time, knowing she wouldn't agree. But she did?.. Then the day that we would meet up, came. I saw her from afar and walked towards her, I wanted to hug her but I was so shy because Jacob and Keen were there. They asked me if I wanted to say something but I was just so speechless. But when they left, Margaux told me she couldn't stay too long. So when she was about to leave I hugged her, tight. I didn't wanna let go, she hugged me too, saying it's okay. Then yeah, a lot of people saw us hugging, we were in public and those people were like saying that we were cute, but I was just about to cry. When she left, I was sobbing but I couldn't do anything. I regret not saying anything while I was there with her. And yeah after that day, we didn't talk anymore. Maybe she's the right person but it's just the wrong time. Or maybe we weren't meant to be at all.`
    ];

    let currentPage = 0;

    const pageContent = document.querySelectorAll('.page');
    const pageNumber = document.getElementById('page-number');

    function loadPage(pageIndex) {
        if (pageIndex < pages.length) {
            pageContent.forEach((page, index) => {
                if (index === pageIndex) {
                    page.innerHTML = pages[pageIndex];
                    page.style.display = 'block';
                } else {
                    page.style.display = 'none';
                }
            });
            pageNumber.textContent = pageIndex + 1;
        }
    }

    loadPage(currentPage);

    setInterval(() => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            loadPage(currentPage);
        }
    }, 5000); // Change to fit the speed you want
});

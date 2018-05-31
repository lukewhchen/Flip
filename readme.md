# Flip
Flip is a logic puzzle game.
By clicking a square to flip its color.
All adjacent squares will also flip on the same time.
Your challenge is to turn all squares to pink.

# Features and Implementation
I used javaScript and JQuery to dynamically handle DOM elements as well as implement game logic. I also leveraged CSS3 features to present popup modals for display game information and implement responsive web design to improve user interface(UI).


## Authentication - User Log-in/out and Sign-up/out

![Welcome Page](https://github.com/lukewhchen/Flip/blob/master/docs/board.png?raw=true)

When visiting babybook if you already have an account, you can easily log in on navigation bar. You can always create a new account using the sign up form. The users account information are protected by Auth pattern. Only the valid user can log-in and see all the features.

## Posts - Main Page
Once user sign up for an account, they can see all the posts on the main page. User can post their cutest baby photo through Post button. The main purpose for developed babybook is to share baby's photo, if you don't have for now, babybook will pick one on your post. Photos are hosted using an AWS S3 bucket and uploaded and stored into the database using the `paperclip` gem.

![Main Page](https://github.com/lukewhchen/babybook/blob/master/docs/Main%20Page.png?raw=true)

## Parenting Information
User can also share parenting information with other user. On the right-side of main page, user can see all kind of parenting infor and visiting the website through links.


# Future Directions
- error handling
- like/comment/share
- user profile
- user photo albums

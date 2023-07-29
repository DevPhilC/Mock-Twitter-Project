
const user1 = {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        numOfTweets: '13.6K Tweets',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    }

   const user2 = {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        numOfTweets: '15.3K Tweets',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    }

    const users = {
        user1,
        user2
    }

const params = new URLSearchParams(window.location.search)

const selectedUser = users[params.get('user')];

console.log(window)

//abbrNumber function takes number abbreviates & adds letter (ie. 1k, 2M)
function intlFormat(num)
{
  return new Intl.NumberFormat().format(Math.round(num*10)/10);
}
function abbrNumber(num)
{
  if(num >= 1000000)
    return intlFormat(num/1000000)+'M';
  if(num >= 1000)
    return intlFormat(num/1000)+'k';
  return intlFormat(num);
}

    var heroContainer = document.getElementById('hero-container')

    var headerContainer = document.getElementById('header-container')

    headerContainer.innerHTML = `
        <a class="back-arrow" href="#">⬅</a>
        <div class="top-user-info">
            <h2>${selectedUser.displayName} ✅</h2>
            <h4>${selectedUser.numOfTweets}</h4>
        </div>
    `

    var coverPhotoContainer = document.getElementById('cover-photo-container')
    coverPhotoContainer.style.backgroundImage = `url(${selectedUser.coverPhotoURL})`

    var profileDetailsContainer = document.getElementById('profile-details');
    profileDetailsContainer.innerHTML = `
        <div class="profile-left-side">
            <div class="outer-pic-container">
                <div class="inner-pic-container" style="background-image: url(${selectedUser.avatarURL})">
                </div>
            </div>
            <h2>${selectedUser.displayName} ✅</h2>
            <h4>${selectedUser.userName}</h4>
            <h4>🗓️ Joined ${selectedUser.joinedDate}</h4>
            <div class="follow-info">
                <h4 class="following"><strong>${abbrNumber(selectedUser.followingCount)}</strong> Following</h4>
                <h4 class="followers"><strong>${abbrNumber(selectedUser.followerCount)}</strong> Followers</h4>
            </div>    
        </div>
        <a class="follow-btn">Following</a>
    `

    var mediaTabsContainer = document.getElementById('media-tabs');
    mediaTabsContainer.innerHTML = `
        <div class="tab selected-tab"><a>Tweets</a></div>
        <div class="tab"><a>Tweets & replies</a></div>
        <div class="tab"><a>Media</a></div>
        <div class="tab"><a>Likes</a></div>
    `

    var tweetsContainer = document.getElementById('tweets-container')
    tweetsContainer.innerHTML = `
        <div class="tweet">
            <div class="left-right-sides">
                <div class="container-left-side">
                    <img class="profile-pic-post" src="${selectedUser.avatarURL}"></img>
                    <div class="post-content">
                        <div class="post-info">
                            <h2 class="us">${selectedUser.displayName} ✅</h2>
                            <h4>${selectedUser.userName}</h4>
                            <div class="circle-seperator"></div>
                            <h4 class="time-stamp">1y</h4>
                        </div>
                        <p>${selectedUser.tweets[0].text}</p>
                    </div>
                </div>
                <a class="container-right-side">
                    <div class="options-circle"></div>
                    <div class="options-circle"></div>
                    <div class="options-circle"></div>
                </a>
            </div>
            <div class="bottom-side">
                <a class="interact-option">💬 5.2k</a>
                <a class="interact-option">🔁 7.7k</a>
                <a class="interact-option">❤️ 65.2k</a>
                <a class="interact-option">↪️</a>
            </div>
        </div>
        <div class="tweet">
            <div class="left-right-sides">
                <div class="container-left-side">
                    <img class="profile-pic-post" src="${selectedUser.avatarURL}"></img>
                    <div class="post-content">
                        <div class="post-info">
                            <h2 class="us">${selectedUser.displayName} ✅</h2>
                            <h4>${selectedUser.userName}</h4>
                            <div class="circle-seperator"></div>
                            <h4 class="time-stamp">1y</h4>
                        </div>
                        <p>${selectedUser.tweets[1].text}</p>
                    </div>
                </div>
                <a class="container-right-side">
                    <div class="options-circle"></div>
                    <div class="options-circle"></div>
                    <div class="options-circle"></div>
                </a>
            </div>
            <div class="bottom-side">
                <a class="interact-option">💬 5.2k</a>
                <a class="interact-option">🔁 7.7k</a>
                <a class="interact-option">❤️ 65.2k</a>
                <a class="interact-option">↪️</a>
            </div>
        </div>
        <div class="tweet">
            <div class="left-right-sides">
                <div class="container-left-side">
                    <img class="profile-pic-post" src="${selectedUser.avatarURL}"></img>
                    <div class="post-content">
                        <div class="post-info">
                            <h2 class="us">${selectedUser.displayName} ✅</h2>
                            <h4>${selectedUser.userName}</h4>
                            <div class="circle-seperator"></div>
                            <h4 class="time-stamp">1y</h4>
                        </div>
                        <p>${selectedUser.tweets[2].text}</p>
                    </div>
                </div>
                <a class="container-right-side">
                    <div class="options-circle"></div>
                    <div class="options-circle"></div>
                    <div class="options-circle"></div>
                </a>
            </div>
            <div class="bottom-side">
                <a class="interact-option">💬 5.2k</a>
                <a class="interact-option">🔁 7.7k</a>
                <a class="interact-option">❤️ 65.2k</a>
                <a class="interact-option">↪️</a>
            </div>
        </div>
    `



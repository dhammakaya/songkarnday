window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://photoofdays.blogspot.com'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([
        {
            "type": "template",
            "altText": "HBD",
            "template": {
                "type": "carousel",
                "columns":
                [
                {
                    "thumbnailImageUrl": "https://4.bp.blogspot.com/-OQfdyfuI7ik/XItUynnpTlI/AAAAAAAB_9A/uJyivQdyLEgs9VVZfj1RBql9v-JIgZPAACLcBGAs/s1600/001.jpg",
                    "title": "Happy Birthday",
                    "text": "May the Tripple gems bless you.",
                    "actions": [{
                            "type": "uri",
                            "label": "HBD Song1",
                            "uri": "https://www.youtube.com/watch?v=f3Y9zdMGGtg"
                      }]
                },
                {
                    "thumbnailImageUrl": "https://3.bp.blogspot.com/-SLFzacc3wdY/XItP9BTD5dI/AAAAAAAB_8s/Se5CxncgFWYNOw8_AXV-8b0Gkibf3WEuQCLcBGAs/s1600/002.jpg",
                    "title": "Happy Birthday",
                    "text": "May the Buddha bless you always,May the Dharma guide you.",
                    "actions": [{
                            "type": "uri",
                            "label": "HBD Song2",
                            "uri": "https://www.youtube.com/watch?v=P3EjRcqfWqw"
                      }]
                },
                {
                    "thumbnailImageUrl": "https://4.bp.blogspot.com/-uOfAxUjNcFc/XItP8xTKPJI/AAAAAAAB_8k/wSMsj13W_xkVn9zsBQx5p4AGOQ8YDieBQCLcBGAs/s1600/003.jpg",
                    "title": "Happy Birthday",
                    "text": "Wishes you be rich, be healthy and peaceful mind.",
                    "actions": [{
                            "type": "uri",
                            "label": "HBD Song3",
                            "uri": "https://www.youtube.com/watch?v=1kKDcUzxvYs"
                      }]
                }
                ],
                "imageAspectRatio": "rectangle"
            }
        }
        ]).then(function () {
            // window.alert("Message sent");
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    // get access token
    document.getElementById('getaccesstoken').addEventListener('click', function () {
        const accessToken = liff.getAccessToken();
        document.getElementById('accesstokenfield').textContent = accessToken;
        toggleAccessToken();
    });

    // get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            const profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            const img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleAccessToken() {
    toggleElement('accesstokendata');
}

function toggleProfileData() {
    toggleElement('profileinfo');
}

function toggleElement(elementId) {
    const elem = document.getElementById(elementId);
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}

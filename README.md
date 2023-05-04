# Setting Up on Local Computer

First, you must set up the React Native Environment. Documentation can be found at: https://reactnative.dev/docs/environment-setup

Open Git Bash/Terminal and move to desired directory (probably your desktop). `cd Desktop`

Clone the repo.

```
git clone https://github.com/mjcunninghm/3DCardiopedia.git
cd 3DCardiopedia
```

To install all the required packages, run `npm install`.

If on iOS, you need to install the pod file. ***Windows users need not worry about this step.***

```
cd ios
pod install
cd ..
```

You should now be able to run the program. To do so, run `npx react-native run-android`. iOS users should replace android with ios.

***HEADS UP:***
Setting up and running in the React Native environment can be difficult. However, it's extensively documented. 
I recommend copy and pasting any errors you might have into google. Odds are someone has had the same problem before.

Reach out to mattcunningham.32@gmail.com with questions. I'd be happy to help.

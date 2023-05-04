# Overview

The code in this repo controls the user interface for a mobile application named 3D Cardiopedia. There are currently 3 main moduli: Patient Portal, Care Team Portal, and a Library. The Patient Portal is designed for patients to view their own models. The CT Portal is meant for care team members to view any patient's model. The library is a general use library filled with models. This app is in conjuction with members of the UIHC pediactric cardiology unit.

In its current state, model viewing is not available in the app. Model viewing is available in a React based client. See https://github.com/mjcunninghm/3DC-model-view.git for more.

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

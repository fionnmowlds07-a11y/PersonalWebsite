---
title: "RowVision"
order: 1
summary: "A desktop app that turns ordinary phone footage from a coaching launch into a biomechanical breakdown of every stroke. It tracks every rower in the boat, finds each catch and finish, and scores technique against targets drawn from published research, with an honest rating of how far each number can be trusted."
role: "Founder and sole developer since 2026. Rowers around Ireland use it, and the Linux app can be downloaded from rowvision.app."
tech: "Python, OpenCV, NumPy, ONNX Runtime, RTMPose and YOLOX, TypeScript, React, Electron, Next.js, Three.js, Supabase, Docker, pytest, Vitest, Playwright, GitHub Actions"
highlight: "It would rather say \"not scored\" than give a number it can't defend. Every result carries an accuracy rating calibrated against hand-labelled footage, end-on and distant shots get filming advice instead of scores, and every score links back to the exact frames and studies behind it."
liveUrl: "https://rowvision.app"
repoUrl: ""
---

## Why I built it

You can't see yourself row. A coach in the launch watches a crew for a few strokes at a time, from one side, while steering. As a rower I wanted to see every stroke of an outing afterwards, with numbers on it, from the phone footage coaches already film. There is nothing to fit to the boat and nothing to wear.

## How it works

You add a clip, tap yourself on a clear frame, and say your boat, side and seat. The analysis then runs on your own computer.

- **Pose estimation.** A person detector (YOLOX) and a pose model (RTMPose), both run through ONNX Runtime, find every joint in every frame. OpenCV handles the video.
- **Finding the crew.** Every person in the picture is tracked through the clip. People who move with a stroke rhythm are rowers, so a cox, the coach in the launch and people on the bank are left out. A crew always falls along one straight line from any camera position, which is how two boats racing side by side are kept apart. Seats are numbered from the way the crew faces.
- **Splitting the stroke.** Each stroke is split into catch, drive, finish and recovery. At every catch and finish the engine measures body angle, knee and arm angles, body swing, stroke length and rate, and whether you fade in the second half of the piece.
- **Crew timing.** Any boat from a single to an eight can be measured one seat at a time or as a whole crew. Each seat is timed against the rower it follows: scullers follow stroke, and sweep rowers follow the nearest rower towards the stern on their own side.
- **Scoring.** Body angles are scored against targets I drew from 130 published studies, found through a structured PubMed search. Athletes can set their own target ranges and choose which measures count, and saved clips are rescored instantly from their stored measurements, without analysing the video again.

## Being honest about accuracy

No published study had validated pose estimation for rowing on the water, so I had to measure the accuracy myself. I hand-labelled joints on real footage and compared them with the model. On 108 usable frames from 12 clips the keypoint error was 2 pixels, and the accuracy rating is calibrated from that.

- Every result shows the share of its angle readings expected to fall within 5° of the truth, from Excellent down to Poor. A Poor rating hides the overall score until you've read a warning.
- Angles are corrected for camera angle at every moment, because the launch moves. Up to 25° off side-on is measured as filmed, up to 60° is corrected, and footage filmed from ahead or behind gets no score.
- Rowers too small in the frame get "film closer" advice instead of a number.
- Knees are read from the leg nearest the camera only. They are shown as a guide and never scored, because they matched my labels within 5° only 21% of the time.
- Sweep rowers lean out towards their rigger, which changes how they look from an angle. I checked the correction on a drone clip of an eight filmed from every angle, across about 300 catches.

## The app

The desktop app is built with Electron and React and ships as a Windows installer and a Linux AppImage, both built in CI. It steps through the footage frame by frame with your joints and angles drawn over the picture, shows your pose against the target on a 3D model you can rotate, and charts every stroke. Two clips can be compared side by side, with changes too small to call marked as such, and your clip library shows whether last month's fix has held.

Your video never leaves your computer unless you choose to send it. The app is locked down: the page has no Node access, it makes no remote requests, and every file read is checked so nothing outside the clip library can be opened.

## How it's built and tested

The analysis engine is Python, and the app is TypeScript. The same results page, frame viewer and 3D model are shared between the desktop app and an earlier Next.js web version backed by Supabase. More than 900 automated tests run in GitHub Actions on every pull request, across pytest, Vitest and Playwright, including a test of the installed app itself. Every change to the measuring is also rerun on every real clip before it's kept, because twice a change passed every test and still made real clips worse.

Real footage shows identifiable athletes, many of them juniors, so it never goes into the repository and CI fails if a video file is ever tracked. Tests use generated footage instead.

The marketing site at rowvision.app is a scroll-driven film over real footage, with the pose data drawn live, plus pages where you can drag one real rower's joints, move a camera round a boat to see what the engine would do, and find out who your seat is timed against.

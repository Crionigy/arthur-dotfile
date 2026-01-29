#!/bin/bash

# Exit if tmux session already exists
tmux has-session -t dev 2>/dev/null
if [ $? -eq 0 ]; then
  echo "Session already exists. Attaching..."
  tmux attach -t dev 
  exit 0
fi

CWD=$1
if [ -z $1 ]; then
  $CWD=$(pwd)
fi

# Create a new detached session
tmux new-session -d -s dev -n "editor"

# Set up code window with editor and terminal
tmux send-keys -t dev:1 "cd $CWD" C-m
tmux send-keys -t dev:1 "clear" C-m
tmux send-keys -t dev:1 "nvim" C-m

# Create server window
tmux new-window -t dev:2 -n "server"
tmux send-keys -t dev:2 "cd $CWD" C-m
tmux send-keys -t dev:2 "clear" C-m

# Create git window
if [ -d "$CWD/.git" ]; then
  tmux new-window -t dev:3 -n "git"
  tmux send-keys -t dev:3 "cd $CWD" C-m
  tmux send-keys -t dev:3 "clear" C-m
  tmux send-keys -t dev:3 "lazygit" C-m
fi

# Select the first window and attach
tmux select-window -t dev:1
tmux attach-session -t dev

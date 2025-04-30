
#PATH
export PATH="$HOME/.local/bin:$PATH"

export ZDOTDIR="$HOME/.config/zsh"

export MANGOHUD_CONFIG=throttling_status,fps,vulkan_driver,frame_timing,throttling_status_graph,resolution,refresh_rate,vsync=1

# Session
export XDG_SESSION_TYPE=wayland
# export XDG_SESSION_DESKTOP=sway
# export XDG_CURREN_DESKTOP=sway

export EDITOR="nvim"
export TERMINAL=ghostty
export BROWSER=brave

export GTK_THEME='Adwaita:dark'
# export XCURSOR_SIZE=32
# export XCURSOR_PATH=/run/host/user-share/icons:/run/host/share/icons

export AMD_VULKAN_ICD=RADV

export XDG_CONFIG_HOME=$HOME/.config
export XDG_CACHE_HOME=$HOME/.cache
export XDG_DATA_HOME=$HOME/.local/share
export XDG_STATE_HOME=$HOME/.local/state

# Wayland stuff
export MOZ_ENABLE_WAYLAND=1
export QT_QPA_PLATFORMA=wayland
#export SDL_VIDEODRIVER=wayland
export _JAVA_AWT_WM_MONREPARENTING=1
#export WLR_DRM_NO_MODIFIERS=1
export VBLANK_MODE=0
export VKD3D_FRAME_RATE=0
export DXVK_FRAME_RATE=0

#export ZVM_PATH=$XDG_DATA_HOME/zvm

# exec sway "$@"

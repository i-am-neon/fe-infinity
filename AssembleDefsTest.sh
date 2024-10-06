#!/bin/bash

# Suppress fixme and other Wine debug messages
export WINEDEBUG=-all

time wine cmd /c AssembleDefs.bat
time ./AssembleDefs.sh

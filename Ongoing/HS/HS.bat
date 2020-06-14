@echo on
echo cd /d tools/env
echo call Script\activate.bat
echo cd /d ../..
python tools/dump_testing_data.py fff59c0b2933467279bfe3e65dbb2532 simulator_config
pause

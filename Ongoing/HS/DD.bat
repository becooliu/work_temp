1.打开Proxy SwitchyOmega插件的代理功能，打开后网络不可用
2.cd env
3.Scripts\activate
4.cd ..
5.har_file_path为network.json文件的路径
mitmdump -s replayer.py --set har_file_path=${har_file_path}

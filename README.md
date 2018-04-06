# headless-chrome-example
Vagrant + docker + headless chrome

## Vagrantの起動
``vagrant up``

## VagrantにSSH接続
``vagrant ssh``

## Dockerfileをビルド
``sudo docker build -t headless-chrome-image /vagrant``

## Dockerを起動
``sudo docker run -v /vagrant:/tmp/share/ headless-chrome-image``

> 起動直後は'Error: net::ERR_NETWORK_CHANGED'が発生する可能性があるのでその場合は再度Dockerを起動する

## GitcloneしたフォルダにScreenshot.pngが取得できてるはず!!!

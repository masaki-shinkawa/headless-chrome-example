# headless-chrome-example
Vagrant + docker + headless chrome

## Vagrantの起動
``vagrant up``

## VagrantにSSH接続
``vagrant ssh``

## Dockerfileをビルド
``sudo docker build -t headless-chrome-image /vagrant

## Dockerを起動
``sudo docker run -v /vagrant:/tmp/share/ headless-chrome-image``

## GitcloneしたフォルダにScreenshot.pngが取得できてるはず!!!

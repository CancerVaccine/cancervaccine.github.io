#Cancer Vaccine Institute (CVI)

##Contributing
Please follow the guidelines from [HERE](/docs/CVI%20Page%20designs.pdf)

This is a remake of the [Cancer Vaccine Institute](http://www.cancervaccine.org.uk/) website, using [jekyll-bootstrap-sass](https://github.com/irmbrady/jekyll-bootstrap-sass).

This can be viewed on GitHub at the following URL: [http://russet-stork.cloudvent.net/](http://russet-stork.cloudvent.net/)

## Developing locally

1. Clone the repository
2. Install Ruby via Powershell: `choco install ruby`
3. Restart powershell and make the repository the current directory
4. Don't use SSL for packages to get things working quickly
```powershell
gem sources -r https://rubygems.org/
gem sources -a http://rubygems.org/
```
5. Install Jekyll `gem install jekyll`
6. Remove `Gemfile` (to get things working quickly)
7. Run Jekyll: `jekyll serve`

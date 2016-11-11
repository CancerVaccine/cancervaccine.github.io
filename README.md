#Cancer Vaccine Institute (CVI)

##Contributing
Please follow the guidelines from [HERE](/CancerVaccine/cancervaccine.github.io/blob/master/docs/CVI%20Page%20designs.pdf)

This is a remake of the [Cancer Vaccine Institute](http://www.cancervaccine.org.uk/) website, using [jekyll-bootstrap-sass](https://github.com/irmbrady/jekyll-bootstrap-sass).

This can be viewed on GitHub at the following URL: [http://russet-stork.cloudvent.net/](http://russet-stork.cloudvent.net/)

## Developing locally

1. Clone the repository
2. Install Jekyll via Powershelll: `choco install ruby`
3. Restart powershell
5. Don't use SSL for packages to get things working quickly
```powershell
gem sources -r https://rubygems.org/
gem sources -a http://rubygems.org/
```
4. `gem install jekyll`
5. Remove `Gemfile` (to get things working quickly)
4. Run Jekyll: `jekyll serve`

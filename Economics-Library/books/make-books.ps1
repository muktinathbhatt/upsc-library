$books = @(
  @{Id='02';File='02-economic-foundations.html'},
  @{Id='03';File='03-growth-development-and-jobs.html'},
  @{Id='04';File='04-money-banking-and-inflation.html'},
  @{Id='05';File='05-public-finance-and-budgeting.html'},
  @{Id='06';File='06-external-sector.html'},
  @{Id='07';File='07-agriculture-and-food-economy.html'},
  @{Id='08';File='08-industry-infrastructure-and-investment.html'},
  @{Id='09';File='09-planning-and-resource-mobilisation.html'},
  @{Id='10';File='10-inclusive-growth-and-human-development.html'},
  @{Id='11';File='11-prelims-master-book.html'},
  @{Id='12';File='12-mains-answer-writing-manual.html'}
)
$template = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="../styles.css"><link rel="stylesheet" href="book.css"><title>Arthashastra</title></head><body data-book="BOOKID"><div class="reading-progress"></div><header class="topbar"><a class="brand" href="../index.html"><span class="brand-mark">अ</span><span>Arthashastra<small id="book-number"></small></span></a><nav><a href="../index.html#library">Library</a><a href="#article">Read</a></nav></header><main class="reader-shell"><aside class="book-toc" id="toc"></aside><article id="article"></article></main><script src="book-content.js"></script><script src="reader.js"></script></body></html>'
foreach($book in $books){$template.Replace('BOOKID',$book.Id) | Set-Content -Encoding utf8 $book.File}

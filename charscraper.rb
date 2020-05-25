require 'open-uri'
require 'nokogiri'
require 'json'

user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.854.0 Safari/535.2"
document = JSON[open("https://www.dndbeyond.com/character/26160297/json",'User-Agent' => user_agent).read]
p document["modifiers"]["race"]

# [{"id"=>1, "name"=>nil, "value"=>13}, {"id"=>2, "name"=>nil, "value"=>15}, {"id"=>3, "name"=>nil, "value"=>14}, {"id"=>4, "name"=>nil, "value"=>12}, {"id"=>5, "name"=>nil, "value"=>10}, {"id"=>6, "name"=>nil, "value"=>8}]

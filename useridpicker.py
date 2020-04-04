import requests
from splinter import Browser

browser = Browser('phantomjs')

def get_url_list():
    d = open('ids.txt', 'w')
    r = requests.get('https://www95.zippyshare.com/d/tJodgpNd/21133/yazarlist.txt')
    d.write(r.text)
    r = open('yazarlist.txr', 'r')
    return r


def extract_ids(ls):
    y = open('new.txt', 'a')
    lines = ls.readlines()
    c = 0
    for line in lines:
        browser.visit(line)
        c += 1
        try:
            od = browser.evaluate_script("a = document.getElementsByClassName('menu-attached')[0].getAttribute('data-author-id')")
        except:
            pass

        print(c, od)
        y.write(od + '\n')

extract_ids(get_url_list())

riot.tag2('tab-content', '<div class="{active: opts.tab.active} tab-content">{opts.tab.content}</div>', '', '', function(opts) {
});
riot.tag2('tab-contents', '<div class="tab-contents"> <tab-content each="{tab in opts.tabs}" tab="{tab}"></tab-content> </div>', '', '', function(opts) {
});
riot.tag2('tab-header', '<div class="{active: opts.tab.active} tab-header">{opts.tab.title}</div>', '', '', function(opts) {
});
riot.tag2('tab-headers', '<div class="tab-headers"> <tab-header onclick="{parent.opts.isclicked}" each="{tab in opts.tabs}" tab="{tab}"></tab-header> </div>', '', '', function(opts) {
});
riot.tag2('tabbed-todo', '<tab-headers isclicked="{this.isclicked}" tabs="{opts.tabs}"></tab-headers> <tab-contents tabs="{opts.tabs}"></tab-contents>', '', '', function(opts) {
        this.on('before-mount', function() {
            if(typeof opts.defaultTabIndex !== "undefined") {
              opts.tabs[opts.defaultTabIndex].active = true;
            }
          })

        this.isclicked = (event) => {
            opts.tabs.forEach((tab) => {
                if (event.item.tab.id == tab.id) {
                    tab.active = true;
                } else {
                    tab.active = false;
                }
            });

            this.update();
        }
});
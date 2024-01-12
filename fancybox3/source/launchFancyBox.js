
    (
    //    function LaunchFancybox(url, fbWidth, fbHeight, fbType) {
    //        $(".fancybox").fancybox({
    //            'width': fbWidth,
    //            'height': fbHeight,
    //            'autoSize': false,
    //            'type': fbType,
    //            'padding': 0,
    //            'overlayColor': '#ccc',
    //            href: url,
    //            iframe: {
    //                preload: false
    //            },

    //            helpers: {
    //                overlay: {
    //                    css: {
    //                        'background': '#000000',

    //                    }
    //                }
    //            }

    //        });
    //    }
    //);
    (
        function LaunchFancybox2(fbType, url, fbWidth) {
            $.fancybox.open({
                src: url,
                type: fbType,
                autoSize: true,
                width: fbWidth,
                height: 'auto',
                padding: 0,
                aspectRatio: true,
                overlayColor: '#ccc',
                href: url,
                iframe: {
                    preload: false
                },
                helpers: {
                    overlay: {
                        css: {
                            'background': '#000000',
                        }
                    }
                }
            });
        }
    )

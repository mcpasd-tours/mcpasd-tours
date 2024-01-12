// Garden Gnome Software - Skin
// Pano2VR 7.0.8/20017
// Filename: northside.ggsk
// Generated 2024-01-04T10:30:40

function pano2vrSkin(player,base) {
	player.addVariable('var1', 1, 0, { ignoreInState: 0  });
	player.addVariable('ht_ani', 2, false, { ignoreInState: 0  });
	player.addVariable('button', 2, true, { ignoreInState: 0  });
	player.addVariable('has_photo_button', 2, true, { ignoreInState: 1  });
	player.addVariable('has_splash', 2, true, { ignoreInState: 1  });
	player.addVariable('ExtValue', 0, "", { ignoreInState: 0  });
	player.addVariable('splash', 1, 1, { ignoreInState: 1  });
	player.addVariable('sidemenu', 1, 0, { ignoreInState: 0  });
	player.addVariable('thumbs', 1, 0, { ignoreInState: 0  });
	player.addVariable('gallerymenu', 1, 0, { ignoreInState: 0  });
	player.addVariable('directions', 1, 0, { ignoreInState: 0  });
	player.addVariable('share', 1, 0, { ignoreInState: 0  });
	player.addVariable('contact', 1, 0, { ignoreInState: 0  });
	player.addVariable('photos_on', 1, 0, { ignoreInState: 0  });
	player.addVariable('textdescription', 1, 0, { ignoreInState: 0  });
	player.addVariable('gallery_on', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._trigger=document.createElement('div');
		el.ggId="trigger";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 594px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._trigger.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._trigger.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._trigger);
		el=me._splash=document.createElement('div');
		el.ggId="splash";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle lightbox_splash";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 9900;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._splash.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._splash.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('splash') == Number("0")))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._splash.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._splash.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._splash.style.transition='opacity 500ms ease 0ms';
				if (me._splash.ggCurrentLogicStateAlpha == 0) {
					me._splash.style.visibility=me._splash.ggVisible?'inherit':'hidden';
					me._splash.style.opacity=1;
				}
				else if (me._splash.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._splash.style.opacity == 0.0) { me._splash.style.visibility="hidden"; } }, 505);
					me._splash.style.opacity=0;
				}
				else {
					me._splash.style.visibility=me._splash.ggVisible?'inherit':'hidden';
					me._splash.style.opacity=1;
				}
			}
		}
		me._splash.logicBlock_alpha();
		me._splash.ggUpdatePosition=function (useTransition) {
		}
		el=me._splashtrigger=document.createElement('div');
		el.ggId="splashtrigger";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle splashposter";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._splashtrigger.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._splashtrigger.ggUpdatePosition=function (useTransition) {
		}
		me._splash.appendChild(me._splashtrigger);
		el=me._flyover1=document.createElement('div');
		me._flyover1.seekbars = [];
		me._flyover1.seekbars.push('media_seekbar');
		me._flyover1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._flyover1.seekbars.length; i++) {
					var seekbar = me.findElements(me._flyover1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._flyover1.hasChildNodes()) {
				me._flyover1.removeChild(me._flyover1.lastChild);
			}
			if (me._flyover1__vid) {
				me._flyover1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._flyover1.ggVideoNotLoaded == false && me._flyover1.ggDeactivate && player.isPlaying('flyover1')) { me._flyover1.ggDeactivate(); }
				me._flyover1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('flyover1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._flyover1.ggVideoNotLoaded = false;
			me._flyover1__vid=document.createElement('video');
			me._flyover1__vid.className='ggskin ggskin_video';
			me._flyover1__vid.setAttribute('width', '100%');
			me._flyover1__vid.setAttribute('height', '100%');
			me._flyover1__vid.setAttribute('crossOrigin', 'anonymous');
			me._flyover1__vid.setAttribute('controlsList', 'nodownload');
			me._flyover1__vid.setAttribute('oncontextmenu', 'return false;');
			me._flyover1__vid.setAttribute('autoplay', '');
			me._flyover1__vid.muted = true;
			me._flyover1__vid.volume = 0.0;
			me._flyover1__source=document.createElement('source');
			me._flyover1__vid.setAttribute('poster', 'media/splash_poster.jpg');
			me._flyover1__source.setAttribute('src', media);
			me._flyover1__vid.setAttribute('playsinline', 'playsinline');
			me._flyover1__vid.setAttribute('style', 'object-fit: cover;;');
			me._flyover1__vid.style.outline = 'none';
			me._flyover1__vid.appendChild(me._flyover1__source);
			me._flyover1.appendChild(me._flyover1__vid);
			var videoEl = player.registerVideoElement('flyover1', me._flyover1__vid);
			videoEl.autoplay = true;
			player.changeVolume('flyover1', 0.0);
			notifySeekbars();
			me._flyover1.ggVideoSource = media;
		}
		el.ggId="flyover1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._flyover1.ggIsActive=function() {
			if (me._flyover1__vid != null) {
				return (me._flyover1__vid.paused == false && me._flyover1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._flyover1.ggUpdatePosition=function (useTransition) {
		}
		me._splash.appendChild(me._flyover1);
		el=me._media_controls=document.createElement('div');
		el.ggId="media_controls";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 110px;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 248px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='100% 100%';
		me._media_controls.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_controls.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1000))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._media_controls.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._media_controls.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._media_controls.style.transition='transform 0s';
				if (me._media_controls.ggCurrentLogicStateScaling == 0) {
					me._media_controls.ggParameter.sx = 0.85;
					me._media_controls.ggParameter.sy = 0.85;
					me._media_controls.style.transform=parameterToTransform(me._media_controls.ggParameter);
					skin.updateSize(me._media_controls);
				}
				else {
					me._media_controls.ggParameter.sx = 1;
					me._media_controls.ggParameter.sy = 1;
					me._media_controls.style.transform=parameterToTransform(me._media_controls.ggParameter);
					skin.updateSize(me._media_controls);
				}
			}
		}
		me._media_controls.logicBlock_scaling();
		me._media_controls.ggUpdatePosition=function (useTransition) {
		}
		el=me._media_seekbar=document.createElement('div');
		me._media_seekbar__playhead=document.createElement('div');
		me._media_seekbar.mediaEl = null;
		me._media_seekbar.fromBufferSource = false;
		me._media_seekbar.ggMediaId = 'flyover1';
		el.ggId="media_seekbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._media_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._media_seekbar.mediaEl != null) {
					if (e.target == me._media_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._media_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.bufferSoundDuration();
							me._media_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._media_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._media_seekbar || e.target == me._media_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._media_seekbar.getBoundingClientRect().x;
							if (me._media_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.bufferSoundDuration();
								me._media_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._media_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._media_seekbar.getBoundingClientRect().x;
							if (me._media_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.bufferSoundDuration();
								me._media_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._media_seekbar.clientWidth) * me._media_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._media_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._media_seekbar.onmousedown = me._media_seekbar.ontouchstart = me._media_seekbar.mouseTouchHandling;
		me._media_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._media_seekbar__playhead.style.visibility = 'hidden';
				me._media_seekbar.style.background = '#000000';
				me._media_seekbar.ggConnected = false;
			}
			if (me._media_seekbar.mediaEl != null) {
				if (me._media_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._media_seekbar.updatePlayback);
					if (me._media_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._media_seekbar.bufferSoundActivate);
					}
					if (me._media_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._media_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._media_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._media_seekbar.bufferSoundDeactivate);
					}
					if (me._media_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._media_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._media_seekbar.mediaEl.removeEventListener('progress', me._media_seekbar.updatePlayback);
					me._media_seekbar.mediaEl.removeEventListener('canplay', me._media_seekbar.updatePlayback);
					me._media_seekbar.mediaEl.removeEventListener('timeupdate', me._media_seekbar.updatePlayback);
					if (me._media_seekbar.ggActivate) {
						me._media_seekbar.mediaEl.removeEventListener('play', me._media_seekbar.ggActivate);
					}
					if (me._media_seekbar.ggDeactivate) {
						me._media_seekbar.mediaEl.removeEventListener('ended', me._media_seekbar.ggDeactivate);
						me._media_seekbar.mediaEl.removeEventListener('pause', me._media_seekbar.ggDeactivate);
					}
					if (me._media_seekbar.ggMediaEnded) {
						me._media_seekbar.mediaEl.removeEventListener('ended', me._media_seekbar.ggMediaEnded);
					}
				}
			}
			me._media_seekbar.mediaEl = player.getMediaObject(me._media_seekbar.ggMediaId);
			if (me._media_seekbar.mediaEl) {
				me._media_seekbar.fromBufferSource = false;
			} else {
				me._media_seekbar.mediaEl = player.getMediaBufferSourceObject('flyover1');
				me._media_seekbar.fromBufferSource = true;
			}
			if (me._media_seekbar.mediaEl != null) {
				me._media_seekbar__playhead.style.visibility = 'inherit';
				me._media_seekbar__playhead.style.left = '0px';
				if (me._media_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._media_seekbar.updatePlayback);
					if (me._media_seekbar.ggActivate) {
						me._media_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._media_seekbar.mediaEl.id) me._media_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._media_seekbar.bufferSoundActivate);
					}
					if (me._media_seekbar.ggDeactivate) {
						me._media_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._media_seekbar.mediaEl.id) me._media_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._media_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._media_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._media_seekbar.bufferSoundDeactivate);
					}
					if (me._media_seekbar.ggMediaEnded) {
						me._media_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._media_seekbar.mediaEl.id) me._media_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._media_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._media_seekbar.mediaEl.addEventListener('progress', me._media_seekbar.updatePlayback);
					me._media_seekbar.mediaEl.addEventListener('canplay', me._media_seekbar.updatePlayback);
					me._media_seekbar.mediaEl.addEventListener('timeupdate', me._media_seekbar.updatePlayback);
					if (me._media_seekbar.ggActivate) {
						me._media_seekbar.mediaEl.addEventListener('play', me._media_seekbar.ggActivate);
					}
					if (me._media_seekbar.ggDeactivate) {
						me._media_seekbar.mediaEl.addEventListener('ended', me._media_seekbar.ggDeactivate);
						me._media_seekbar.mediaEl.addEventListener('pause', me._media_seekbar.ggDeactivate);
					}
					if (me._media_seekbar.ggMediaEnded) {
						me._media_seekbar.mediaEl.addEventListener('ended', me._media_seekbar.ggMediaEnded);
					}
				}
				me._media_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._media_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._media_seekbar.updatePlayback = function(args) {
			if (!me._media_seekbar.ggConnected) return;
			if (me._media_seekbar.mediaEl != null) {
				if (me._media_seekbar.mediaEl.readyState || (me._media_seekbar.fromBufferSource && args && args['id'] == me._media_seekbar.mediaEl.id)) {
					if (me._media_seekbar.fromBufferSource) {
						var percent = me._media_seekbar.mediaEl.bufferSoundCurrentTime() / me._media_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._media_seekbar.mediaEl.currentTime / me._media_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._media_seekbar.clientWidth - 2 * 10 + 1) * percent);
					playheadpos += 0;
					me._media_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (10 / me._media_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) ' + currPos + '%';
					if (me._media_seekbar.fromBufferSource) {
						gradientString += ', rgba(192,192,192,1) ' + currPos +'%, rgba(192,192,192,1) 100%';
					} else {
						for (var i = 0; i < me._media_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._media_seekbar.mediaEl.buffered.start(i) / me._media_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._media_seekbar.mediaEl.buffered.end(i) / me._media_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(192,192,192,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,1) ' + currPos + '%, rgba(0,0,0,1) ' + rangeStart + '%';
									gradientString += ', rgba(192,192,192,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(192,192,192,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._media_seekbar.style.background = gradientString;
				}
			}
		}
		me._media_seekbar.appendChild(me._media_seekbar__playhead);
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 10px;';
		var hs_playhead = 'height: 20px;';
		hs_playhead += 'width: 20px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 0px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 10px;';
		hs_playhead += cssPrefix + 'border-radius: 10px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._media_seekbar.setAttribute('style', hs);
		me._media_seekbar__playhead.setAttribute('style', hs_playhead);
		me._media_seekbar.ggIsActive=function() {
			if (me._media_seekbar.mediaEl != null) {
				return (me._media_seekbar.mediaEl.paused == false && me._media_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_seekbar.ggActivate=function () {
			me._media_play.style.transition='none';
			me._media_play.style.visibility='hidden';
			me._media_play.ggVisible=false;
			me._media_pause.style.transition='none';
			me._media_pause.style.visibility=(Number(me._media_pause.style.opacity)>0||!me._media_pause.style.opacity)?'inherit':'hidden';
			me._media_pause.ggVisible=true;
		}
		me._media_seekbar.ggDeactivate=function () {
			me._media_play.style.transition='none';
			me._media_play.style.visibility=(Number(me._media_play.style.opacity)>0||!me._media_play.style.opacity)?'inherit':'hidden';
			me._media_play.ggVisible=true;
			me._media_pause.style.transition='none';
			me._media_pause.style.visibility='hidden';
			me._media_pause.ggVisible=false;
		}
		me._media_seekbar.ggUpdatePosition=function (useTransition) {
			me._media_seekbar.updatePlayback();
		}
		me._media_controls.appendChild(me._media_seekbar);
		el=me._media_pause=document.createElement('div');
		els=me._media_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTc3LjcsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM2gtMTQuM2MtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNmMwLTEuMywxLTIuMywyLjMtMi4zaDE0LjMgICBjMS4zLDAsMi4zLDEsMi4zLDIuM0MtMTc3LjcsMzc3LjctMTc3LjcsNDE2LjMtMTc3LjcsNDE2LjN6IE0tMTUzLjQsNDE2LjNjMCwxLjMtMSwyLjMtMi4z'+
			'LDIuM0gtMTcwYy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42ICAgYzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuM2MxLjMsMCwyLjMsMSwyLjMsMi4zQy0xNTMuNCwzNzcuNy0xNTMuNCw0MTYuMy0xNTMuNCw0MTYuM3oiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xODAsMzc1LjRoLTE0LjNjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiAgICBDLTE3Ny43LDM3Ni40LTE3OC43LDM3NS40LTE4MCwzNzUuNHoiLz4KICAgPHBhdGggZmlsbD0iI0'+
			'ZGRkZGRiIgZD0iTS0xNTUuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYgICAgQy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._media_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._media_pause.ggUpdateText=function() {
			let altText = player._('pause');
			me._media_pause.ggSubElement.setAttribute('alt', altText);
			if (me._media_pause.ggSubElementOver) {
				me._media_pause.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._media_pause.ggSubElementActive) {
				me._media_pause.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._media_pause.ggUpdateText();
		el.ggId="media_pause";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 193px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._media_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_pause.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['media_pause'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._media_pause.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._media_pause.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._media_pause.style.transition='transform 500ms ease 0ms';
				if (me._media_pause.ggCurrentLogicStateScaling == 0) {
					me._media_pause.ggParameter.sx = 1.1;
					me._media_pause.ggParameter.sy = 1.1;
					me._media_pause.style.transform=parameterToTransform(me._media_pause.ggParameter);
					setTimeout(function() {skin.updateSize(me._media_pause);}, 550);
				}
				else {
					me._media_pause.ggParameter.sx = 1;
					me._media_pause.ggParameter.sy = 1;
					me._media_pause.style.transform=parameterToTransform(me._media_pause.ggParameter);
					setTimeout(function() {skin.updateSize(me._media_pause);}, 550);
				}
			}
		}
		me._media_pause.logicBlock_scaling();
		me._media_pause.onclick=function (e) {
			if (me._flyover1.ggApiPlayer) {
				if (me._flyover1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._flyover1.ggApiPlayer.pauseVideo();
					};
					if (me._flyover1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._flyover1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._flyover1.ggApiPlayerType == 'vimeo') {
					me._flyover1.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("flyover1");
			}
		}
		me._media_pause.onmouseover=function (e) {
			me.elementMouseOver['media_pause']=true;
			me._media_pause.logicBlock_scaling();
		}
		me._media_pause.onmouseout=function (e) {
			me.elementMouseOver['media_pause']=false;
			me._media_pause.logicBlock_scaling();
		}
		me._media_pause.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_pause);
		el=me._media_play=document.createElement('div');
		els=me._media_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTUwLjUsMzk4LjZsLTM4LjEsMjYuNmMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjJWMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42ICAgQy0xNDkuMywzOTYuMy0xNDkuMywzOTcuNy0xNTAuNSwzOTguNnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5'+
			'MSwzNzBjMC0xLjUsMS0yLjEsMi4zLTEuMmwzOC4yLDI2LjZjMS4zLDAuOSwxLjMsMi4zLDAsMy4ybC0zOC4yLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._media_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._media_play.ggUpdateText=function() {
			let altText = player._('play');
			me._media_play.ggSubElement.setAttribute('alt', altText);
			if (me._media_play.ggSubElementOver) {
				me._media_play.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._media_play.ggSubElementActive) {
				me._media_play.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._media_play.ggUpdateText();
		el.ggId="media_play";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 193px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._media_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_play.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['media_play'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._media_play.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._media_play.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._media_play.style.transition='transform 500ms ease 0ms';
				if (me._media_play.ggCurrentLogicStateScaling == 0) {
					me._media_play.ggParameter.sx = 1.1;
					me._media_play.ggParameter.sy = 1.1;
					me._media_play.style.transform=parameterToTransform(me._media_play.ggParameter);
					setTimeout(function() {skin.updateSize(me._media_play);}, 550);
				}
				else {
					me._media_play.ggParameter.sx = 1;
					me._media_play.ggParameter.sy = 1;
					me._media_play.style.transform=parameterToTransform(me._media_play.ggParameter);
					setTimeout(function() {skin.updateSize(me._media_play);}, 550);
				}
			}
		}
		me._media_play.logicBlock_scaling();
		me._media_play.onclick=function (e) {
			if (me._flyover1.ggApiPlayer) {
				if (me._flyover1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._flyover1.ggApiPlayer.playVideo();
					};
					if (me._flyover1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._flyover1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._flyover1.ggApiPlayerType == 'vimeo') {
					me._flyover1.ggApiPlayer.play();
				}
			} else {
				player.playSound("flyover1","1");
			}
		}
		me._media_play.onmouseover=function (e) {
			me.elementMouseOver['media_play']=true;
			me._media_play.logicBlock_scaling();
		}
		me._media_play.onmouseout=function (e) {
			me.elementMouseOver['media_play']=false;
			me._media_play.logicBlock_scaling();
		}
		me._media_play.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_play);
		el=me._media_stop=document.createElement('div');
		els=me._media_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNTMuNCw0MTYuM2MwLDEuMy0xLDIuMy0yLjMsMi4zaC0zOC42Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42YzAtMS4zLDEtMi4zLDIuMy0yLjNoMzguNmMxLjMsMCwyLjMsMSwyLjMsMi4zVjQxNi4zeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUzLjQsNDE2LjNjMCwxLjMt'+
			'MSwyLjMtMi4zLDIuM2gtMzguNmMtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNmMwLTEuMywxLTIuMywyLjMtMi4zaDM4LjYgICBjMS4zLDAsMi4zLDEsMi4zLDIuM1Y0MTYuM3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._media_stop__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._media_stop.ggUpdateText=function() {
			let altText = player._('stop');
			me._media_stop.ggSubElement.setAttribute('alt', altText);
			if (me._media_stop.ggSubElementOver) {
				me._media_stop.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._media_stop.ggSubElementActive) {
				me._media_stop.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._media_stop.ggUpdateText();
		el.ggId="media_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 228px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._media_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_stop.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['media_stop'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._media_stop.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._media_stop.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._media_stop.style.transition='transform 500ms ease 0ms';
				if (me._media_stop.ggCurrentLogicStateScaling == 0) {
					me._media_stop.ggParameter.sx = 1.1;
					me._media_stop.ggParameter.sy = 1.1;
					me._media_stop.style.transform=parameterToTransform(me._media_stop.ggParameter);
					setTimeout(function() {skin.updateSize(me._media_stop);}, 550);
				}
				else {
					me._media_stop.ggParameter.sx = 1;
					me._media_stop.ggParameter.sy = 1;
					me._media_stop.style.transform=parameterToTransform(me._media_stop.ggParameter);
					setTimeout(function() {skin.updateSize(me._media_stop);}, 550);
				}
			}
		}
		me._media_stop.logicBlock_scaling();
		me._media_stop.onclick=function (e) {
			if (me._flyover1.ggApiPlayer) {
				if (me._flyover1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._flyover1.ggApiPlayer.pauseVideo();
						me._flyover1.ggApiPlayer.seekTo(0);
					};
					if (me._flyover1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._flyover1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._flyover1.ggApiPlayerType == 'vimeo') {
					me._flyover1.ggApiPlayer.pause();
					me._flyover1.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("flyover1");
			}
		}
		me._media_stop.onmouseover=function (e) {
			me.elementMouseOver['media_stop']=true;
			me._media_stop.logicBlock_scaling();
		}
		me._media_stop.onmouseout=function (e) {
			me.elementMouseOver['media_stop']=false;
			me._media_stop.logicBlock_scaling();
		}
		me._media_stop.ggUpdatePosition=function (useTransition) {
		}
		me._media_controls.appendChild(me._media_stop);
		me._splash.appendChild(me._media_controls);
		el=me._splashsidebar=document.createElement('div');
		el.ggId="splashsidebar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle splashsidebar";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 0%';
		me._splashsidebar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._splashsidebar.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._splashsidebar.ggCurrentLogicStateSize != newLogicStateSize) {
				me._splashsidebar.ggCurrentLogicStateSize = newLogicStateSize;
				me._splashsidebar.style.transition='width 0s, height 0s';
				if (me._splashsidebar.ggCurrentLogicStateSize == 0) {
					me._splashsidebar.style.width='240px';
					me._splashsidebar.style.height='100%';
					skin.updateSize(me._splashsidebar);
				}
				else {
					me._splashsidebar.style.width='300px';
					me._splashsidebar.style.height='100%';
					skin.updateSize(me._splashsidebar);
				}
			}
		}
		me._splashsidebar.logicBlock_size();
		me._splashsidebar.ggUpdatePosition=function (useTransition) {
		}
		el=me._splash_logo=document.createElement('div');
		els=me._splash_logo__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._splash_logo.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="school logo";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._splash_logo.ggSubElement.setAttribute('alt', player._(me._splash_logo.ggAltText));
			me._splash_logo.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._splash_logo.ggText_untranslated = img;
			me._splash_logo.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._splash_logo.ggSubElement.style.width = '0px';
			me._splash_logo.ggSubElement.style.height = '0px';
			me._splash_logo.ggSubElement.src='';
			me._splash_logo.ggSubElement.src=me._splash_logo.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._splash_logo.ggText != player._(me._splash_logo.ggText_untranslated)) {
				me._splash_logo.ggText = player._(me._splash_logo.ggText_untranslated);
				me._splash_logo.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "logos/logo.png";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="splash logo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 0%';
		me._splash_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._splash_logo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._splash_logo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._splash_logo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._splash_logo.style.transition='transform 0s';
				if (me._splash_logo.ggCurrentLogicStateScaling == 0) {
					me._splash_logo.ggParameter.sx = 0.8;
					me._splash_logo.ggParameter.sy = 0.8;
					me._splash_logo.style.transform=parameterToTransform(me._splash_logo.ggParameter);
					skin.updateSize(me._splash_logo);
				}
				else {
					me._splash_logo.ggParameter.sx = 1;
					me._splash_logo.ggParameter.sy = 1;
					me._splash_logo.style.transform=parameterToTransform(me._splash_logo.ggParameter);
					skin.updateSize(me._splash_logo);
				}
			}
		}
		me._splash_logo.logicBlock_scaling();
		me._splash_logo.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._splash_logo.clientWidth;
			var parentHeight = me._splash_logo.clientHeight;
			var img = me._splash_logo__img;
			var aspectRatioDiv = me._splash_logo.clientWidth / me._splash_logo.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = parentWidth;
			currentHeight = Math.round(parentWidth / aspectRatioImg);
			img.style.width=parentWidth + 'px';
			img.style.height='';
			if (!me._splash_logo.ggScrollbars || currentWidth < me._splash_logo.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._splash_logo.scrollLeft=currentWidth / 2 - me._splash_logo.clientWidth / 2;
			}
			if (!me._splash_logo.ggScrollbars || currentHeight < me._splash_logo.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._splash_logo.scrollTop=currentHeight / 2 - me._splash_logo.clientHeight / 2;
			}
		}
		el=me._splashwelcome=document.createElement('div');
		els=me._splashwelcome__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="splashwelcome";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text splashtext";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((290px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 20px 0px 20px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._splashwelcome.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').description)));
			var hs = player._("<span id=\"welcomename\">%1<\/span><br>\n<span id=\"welcometext\">Welcome to our<br>360\xb0 Virtual Campus Tour<\/span>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._splashwelcome.ggUpdateText();
		player.addListener('changenode', function() {
			me._splashwelcome.ggUpdateText();
		});
		el.appendChild(els);
		me._splashwelcome.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._splashwelcome.ggUpdatePosition=function (useTransition) {
		}
		el=me._gotour=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gotour.setAttribute('aria-label', player._('start the standard version of the virtual tour'));
		}
		els=me._gotour__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gotour";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text splash_button";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((240px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(100% + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 7px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 11px 21px 11px 21px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._gotour.ggUpdateText=function() {
			var params = [];
			var hs = player._("Start Exploring!", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gotour.ggUpdateText();
		el.appendChild(els);
		me._gotour.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gotour.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['gotour'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gotour.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gotour.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gotour.style.transition='transform 500ms ease 0ms';
				if (me._gotour.ggCurrentLogicStateScaling == 0) {
					me._gotour.ggParameter.sx = 1.1;
					me._gotour.ggParameter.sy = 1.1;
					me._gotour.style.transform=parameterToTransform(me._gotour.ggParameter);
					setTimeout(function() {skin.updateSize(me._gotour);}, 550);
				}
				else {
					me._gotour.ggParameter.sx = 1;
					me._gotour.ggParameter.sy = 1;
					me._gotour.style.transform=parameterToTransform(me._gotour.ggParameter);
					setTimeout(function() {skin.updateSize(me._gotour);}, 550);
				}
			}
		}
		me._gotour.logicBlock_scaling();
		me._gotour.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('splash') == Number("0")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._gotour.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._gotour.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._gotour.style.transition='transform 500ms ease 0ms';
				if (me._gotour.ggCurrentLogicStateTabIndex == 0) {
					me._gotour.setAttribute('tabindex', '-1');
				}
				else {
					me._gotour.setAttribute('tabindex', '0');
				}
			}
		}
		me._gotour.logicBlock_tabindex();
		me._gotour.onclick=function (e) {
				player.stopSound("flyover");
			player.moveToDefaultViewEx(1,0);
			player.setVariableValue('splash', Number("0.00"));
		}
		me._gotour.ondblclick=function (e) {
			player.startAutorotate(0.05,0);
		}
		me._gotour.onmouseover=function (e) {
			me.elementMouseOver['gotour']=true;
			me._gotour.logicBlock_scaling();
		}
		me._gotour.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._gotour__text)
					return;
				}
			}
			me.elementMouseOver['gotour']=false;
			me._gotour.logicBlock_scaling();
		}
		me._gotour.ggUpdatePosition=function (useTransition) {
		}
		me._splashwelcome.appendChild(me._gotour);
		me._splash_logo.appendChild(me._splashwelcome);
		me._splashsidebar.appendChild(me._splash_logo);
		me._splash.appendChild(me._splashsidebar);
		el=me._accessiblebox=document.createElement('div');
		el.ggId="accessiblebox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #2d2d2d;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._accessiblebox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._accessiblebox.ggUpdatePosition=function (useTransition) {
		}
		el=me._accessiblecontainer=document.createElement('div');
		el.ggId="accessiblecontainer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(0% + 20px);';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._accessiblecontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._accessiblecontainer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width < 1000))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._accessiblecontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._accessiblecontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._accessiblecontainer.style.transition='';
				if (me._accessiblecontainer.ggCurrentLogicStateVisible == 0) {
					me._accessiblecontainer.style.visibility="hidden";
					me._accessiblecontainer.ggVisible=false;
				}
				else {
					me._accessiblecontainer.style.visibility="hidden";
					me._accessiblecontainer.ggVisible=false;
				}
			}
		}
		me._accessiblecontainer.logicBlock_visible();
		me._accessiblecontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._go_readable=document.createElement('div');
		el.ggUpdateAria = function() {
			me._go_readable.setAttribute('aria-label', player._('click to go to screen reader version'));
		}
		els=me._go_readable__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="go readable";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text splash_ada_button";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._go_readable.ggUpdateText=function() {
			var params = [];
			var hs = player._("Screen Reader Version", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._go_readable.ggUpdateText();
		el.appendChild(els);
		me._go_readable.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._go_readable.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['go_readable'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._go_readable.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._go_readable.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._go_readable.style.transition='transform 500ms ease 0ms';
				if (me._go_readable.ggCurrentLogicStateScaling == 0) {
					me._go_readable.ggParameter.sx = 1.05;
					me._go_readable.ggParameter.sy = 1.05;
					me._go_readable.style.transform=parameterToTransform(me._go_readable.ggParameter);
					setTimeout(function() {skin.updateSize(me._go_readable);}, 550);
				}
				else {
					me._go_readable.ggParameter.sx = 1;
					me._go_readable.ggParameter.sy = 1;
					me._go_readable.style.transform=parameterToTransform(me._go_readable.ggParameter);
					setTimeout(function() {skin.updateSize(me._go_readable);}, 550);
				}
			}
		}
		me._go_readable.logicBlock_scaling();
		me._go_readable.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('splash') == Number("0")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._go_readable.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._go_readable.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._go_readable.style.transition='transform 500ms ease 0ms';
				if (me._go_readable.ggCurrentLogicStateTabIndex == 0) {
					me._go_readable.setAttribute('tabindex', '-1');
				}
				else {
					me._go_readable.setAttribute('tabindex', '0');
				}
			}
		}
		me._go_readable.logicBlock_tabindex();
		me._go_readable.onclick=function (e) {
			player.openUrl("ada.html","_self");
		}
		me._go_readable.onmouseover=function (e) {
			me.elementMouseOver['go_readable']=true;
			me._go_readable.logicBlock_scaling();
		}
		me._go_readable.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._go_readable__text)
					return;
				}
			}
			me.elementMouseOver['go_readable']=false;
			me._go_readable.logicBlock_scaling();
		}
		me._go_readable.ggUpdatePosition=function (useTransition) {
		}
		me._accessiblecontainer.appendChild(me._go_readable);
		el=me._go_keyboard=document.createElement('div');
		el.ggUpdateAria = function() {
			me._go_keyboard.setAttribute('aria-label', player._('click to Navigate by keyboard'));
		}
		els=me._go_keyboard__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="go keyboard";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text splash_ada_button";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : 210px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 7px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 6px 7px 5px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._go_keyboard.ggUpdateText=function() {
			var params = [];
			var hs = player._("Navigate by keyboard", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._go_keyboard.ggUpdateText();
		el.appendChild(els);
		me._go_keyboard.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._go_keyboard.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['go_keyboard'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._go_keyboard.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._go_keyboard.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._go_keyboard.style.transition='transform 500ms ease 0ms';
				if (me._go_keyboard.ggCurrentLogicStateScaling == 0) {
					me._go_keyboard.ggParameter.sx = 1.05;
					me._go_keyboard.ggParameter.sy = 1.05;
					me._go_keyboard.style.transform=parameterToTransform(me._go_keyboard.ggParameter);
					setTimeout(function() {skin.updateSize(me._go_keyboard);}, 550);
				}
				else {
					me._go_keyboard.ggParameter.sx = 1;
					me._go_keyboard.ggParameter.sy = 1;
					me._go_keyboard.style.transform=parameterToTransform(me._go_keyboard.ggParameter);
					setTimeout(function() {skin.updateSize(me._go_keyboard);}, 550);
				}
			}
		}
		me._go_keyboard.logicBlock_scaling();
		me._go_keyboard.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._go_keyboard.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._go_keyboard.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._go_keyboard.style.transition='transform 500ms ease 0ms';
				if (me._go_keyboard.ggCurrentLogicStateVisible == 0) {
					me._go_keyboard.style.visibility="hidden";
					me._go_keyboard.ggVisible=false;
				}
				else {
					me._go_keyboard.style.visibility=(Number(me._go_keyboard.style.opacity)>0||!me._go_keyboard.style.opacity)?'inherit':'hidden';
					me._go_keyboard.ggVisible=true;
				}
			}
		}
		me._go_keyboard.logicBlock_visible();
		me._go_keyboard.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('splash') == Number("0")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._go_keyboard.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._go_keyboard.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._go_keyboard.style.transition='transform 500ms ease 0ms';
				if (me._go_keyboard.ggCurrentLogicStateTabIndex == 0) {
					me._go_keyboard.setAttribute('tabindex', '-1');
				}
				else {
					me._go_keyboard.setAttribute('tabindex', '0');
				}
			}
		}
		me._go_keyboard.logicBlock_tabindex();
		me._go_keyboard.onclick=function (e) {
			player.openUrl("#keyboard","_self");
				player.stopSound("flyover");
			player.moveToDefaultViewEx(1,0);
			player.setVariableValue('splash', Number("0.00"));
		}
		me._go_keyboard.ondblclick=function (e) {
			player.startAutorotate(0.05,0);
		}
		me._go_keyboard.onmouseover=function (e) {
			me.elementMouseOver['go_keyboard']=true;
			me._go_keyboard.logicBlock_scaling();
		}
		me._go_keyboard.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._go_keyboard__text)
					return;
				}
			}
			me.elementMouseOver['go_keyboard']=false;
			me._go_keyboard.logicBlock_scaling();
		}
		me._go_keyboard.ggUpdatePosition=function (useTransition) {
		}
		me._accessiblecontainer.appendChild(me._go_keyboard);
		el=me._goaccessible_icon1=document.createElement('div');
		els=me._goaccessible_icon1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC40MyAzOS4wNyI+CiA8cGF0aCBzdHlsZT0iZmlsbDojYzljYWNhOyBmaWxsLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuNzUgLTUuMDMpIiBkPSJNMjksMTYuNjZjLjM0LDQuNDMtLjU0LDguNzksMSwxMy4wOCwxLjM2LDMuNzUsMi4zNCw3LjY1LDMuNDksMTEuNDhBMiwyLDAsMCwxLDMzLDQzLjcxYy0xLjA4LjgxLTIuMzkuMjktMi44OS0xLjE4LTEuNDctNC4zLTIuOS04LjYxLTQuMzgtMTIuOWExLjcsMS43LDAsMCwwLS43NC0xYy0uNzYtLjI4LTEuMTUuMTQtMS4zOC45M0MyMi'+
			'4zNCwzMy44LDIxLjA3LDM4LDE5Ljc0LDQyLjI0YTIuODcsMi44NywwLDAsMS0xLjEyLDEuNjYsMi40NiwyLjQ2LDAsMCwxLTEuOTUtLjJjLS44My0uNDUtLjg0LTEuMzUtLjYxLTIuMjIsMS0zLjYyLDEuNzYtNy4zLDIuOTQtMTAuODUsMS41My00LjU4Ljg5LTkuMjMsMS4wOC0xNEwxMi4yLDE1LjU4Yy0uMjUsMC0uNS0uMDUtLjc0LS4wOS0xLjI0LS4yMi0xLjgyLS44OC0xLjY5LTEuOXMuOTMtMS41MywyLjEzLTEuNDNjMi43NC4yMyw1LjQ4LjYsOC4yMy42NywzLjcuMDksNy40MiwwLDExLjEyLS4xMiwyLjI5LS4wOCw0LjU4LS4zOCw2Ljg2LS41NywxLS4wOSwxLjgzLjI0LDIsMS4zNnMtLjQs'+
			'MS43Ny0xLjYyLDEuOTRDMzUuNDMsMTUuODYsMzIuMzMsMTYuMjMsMjksMTYuNjZaIi8+CiA8cGF0aCBzdHlsZT0iZmlsbDojYzljYWNhOyBmaWxsLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuNzUgLTUuMDMpIiBkPSJNMjcuODQsOC4xN2EzLjIzLDMuMjMsMCwwLDEtMy4yMSwzLjMsMy4yOSwzLjI5LDAsMCwxLTMuMjQtMy4xOEEzLjIsMy4yLDAsMCwxLDI0LjUsNSwzLjE3LDMuMTcsMCwwLDEsMjcuODQsOC4xN1oiLz4KPC9zdmc+Cg==';
		me._goaccessible_icon1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._goaccessible_icon1.ggUpdateText=function() {
			let altText = player._('go to accessible version button');
			me._goaccessible_icon1.ggSubElement.setAttribute('alt', altText);
			if (me._goaccessible_icon1.ggSubElementOver) {
				me._goaccessible_icon1.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._goaccessible_icon1.ggSubElementActive) {
				me._goaccessible_icon1.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._goaccessible_icon1.ggUpdateText();
		el.ggId="goaccessible_icon1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((29px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._goaccessible_icon1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._goaccessible_icon1.ggUpdatePosition=function (useTransition) {
		}
		me._accessiblecontainer.appendChild(me._goaccessible_icon1);
		me._accessiblebox.appendChild(me._accessiblecontainer);
		el=me._golanguage=document.createElement('div');
		els=me._golanguage__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="golanguage";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text translatebar";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._golanguage.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div id=\"google_translate_element\"><\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._golanguage.ggUpdateText();
		el.appendChild(els);
		me._golanguage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._golanguage.logicBlock_cssclasses = function() {
			var newLogicStateCssClasses;
			if (
				((player.getViewerSize().width < 1000))
			)
			{
				newLogicStateCssClasses = 0;
			}
			else {
				newLogicStateCssClasses = -1;
			}
			if (me._golanguage.ggCurrentLogicStateCssClasses != newLogicStateCssClasses) {
				me._golanguage.ggCurrentLogicStateCssClasses = newLogicStateCssClasses;
				me._golanguage.style.transition='';
				if (me._golanguage.ggCurrentLogicStateCssClasses == 0) {
					me._golanguage.className = 'ggskin ggskin_text translatebar_mobile';
				}
				else {
					me._golanguage.className = 'ggskin ggskin_text translatebar';
				}
			}
		}
		me._golanguage.logicBlock_cssclasses();
		me._golanguage.ggUpdatePosition=function (useTransition) {
		}
		el=me._googlelogo=document.createElement('div');
		els=me._googlelogo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjUuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTczMi43IDI0Mi4xOyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzMyLjcgMjQyLjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcn'+
			'Npb249IjEuMSIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I2M5Y2FjYTt9Cjwvc3R5bGU+CiA8Zz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwwLjM1Mjc3Nzc3LC00LjQwMTI4NCw2My4xMTM2NTQpIiBpZD0iZzQzNzciPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg1LjEsNjUuN3Y3My40aDE3NS40Yy01LjIsNDEuMi0xOSw3MS4zLTQwLDkyLjVjLTI1LjYsMjUuNi02NS43LDUzLjgtMTM1LjQsNTMuOCAgICBjLTEwOCwwLTE5Mi41LTg3LjItMTkyLjUtMTk1LjNTMTc3LTEwNS4xLDI4NS4xLTEwNS4xYzU4LjMsMCwxMDAuOCwy'+
			'Mi45LDEzMi4zLDUyLjVsNTEuNS01MS41Yy00My41LTQyLjUtMTAyLTc0LjgtMTgzLjgtNzQuOCAgICBDMTM3LTE3OC45LDEyLjUtNTguMywxMi41LDg5LjhTMTM3LDM1OC41LDI4NS4xLDM1OC41YzgwLDAsMTQwLjMtMjYuMiwxODcuNS03NS4yYzQ4LjQtNDguNCw2My41LTExNi44LDYzLjUtMTcxLjcgICAgYzAtMTYuOS0xLjItMzIuOC0zLjktNDUuOUgyODUuMXoiIGlkPSJwYXRoNDM3NSIvPgogIDwvZz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYyLjEsNjUuMmMtMzMuOCwwLTYxLjMsMjUuNi02MS4zLDYxLjFjMCwzNS4yLDI3LjYsNjEuMiw2MS4zLDYxLjJzNjEuNC0yNS45LDYxLjQtNj'+
			'EuMiAgIEMzMjMuNSw5MC45LDI5NS45LDY1LjIsMjYyLjEsNjUuMnogTTI2Mi4xLDE2My41Yy0xOC41LDAtMzQuNS0xNS4zLTM0LjUtMzcuMWMwLTIyLDE2LTM3LjEsMzQuNS0zNy4xYzE4LjYsMCwzNC41LDE1LjEsMzQuNSwzNy4xICAgQzI5Ni42LDE0OC4yLDI4MC43LDE2My41LDI2Mi4xLDE2My41eiIgaWQ9InBhdGg0Mzc5Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTU2Myw3OC45aC0xYy02LTcuMS0xNy41LTEzLjYtMzIuMi0xMy42Yy0zMC41LDAtNTcuMiwyNi42LTU3LjIsNjEuMSAgIGMwLDM0LjMsMjYuNyw2MS4yLDU3LjIsNjEuMmMxNC43LDAsMjYuMy02LjUsMzIuMi0xMy45aDF2'+
			'OC41YzAsMjMuNC0xMi41LDM1LjktMzIuNiwzNS45Yy0xNi40LDAtMjYuNy0xMS44LTMwLjgtMjEuOGwtMjMuNCw5LjcgICBjNi43LDE2LjIsMjQuNSwzNi4xLDU0LjIsMzYuMWMzMS41LDAsNTguMS0xOC42LDU4LjEtNjMuN3YtMTEwSDU2M0w1NjMsNzguOXogTTUzMi4yLDE2My41Yy0xOC41LDAtMzIuNi0xNS44LTMyLjYtMzcuMSAgIGMwLTIxLjYsMTQuMS0zNy4xLDMyLjYtMzcuMWMxOC4zLDAsMzIuNiwxNS44LDMyLjYsMzcuM0M1NjUsMTQ4LDU1MC41LDE2My41LDUzMi4yLDE2My41eiIgaWQ9InBhdGg0MzgxIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTM5OSw2NS4yYy0zMy45LDAtNj'+
			'EuNCwyNS42LTYxLjQsNjEuMWMwLDM1LjIsMjcuNiw2MS4yLDYxLjQsNjEuMmMzMy44LDAsNjEuMy0yNS45LDYxLjMtNjEuMiAgIEM0NjAuNCw5MC45LDQzMi44LDY1LjIsMzk5LDY1LjJ6IE0zOTksMTYzLjVjLTE4LjYsMC0zNC41LTE1LjMtMzQuNS0zNy4xYzAtMjIsMTYtMzcuMSwzNC41LTM3LjFjMTguNSwwLDM0LjUsMTUuMSwzNC41LDM3LjEgICBDNDMzLjYsMTQ4LjIsNDE3LjUsMTYzLjUsMzk5LDE2My41eiIgaWQ9InBhdGg0MzgzIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsMC4zNTI3Nzc3NywtNC40MDEyODQsNjMuMTEzNjU0KSIgaWQ9Imc0Mzg3Ij4KICAg'+
			'PHBhdGggY2xhc3M9InN0MCIgZD0iTTE3NDAuNC0xNzEuN2g3NXY1MjQuNmgtNzVWLTE3MS43eiIgaWQ9InBhdGg0Mzg1Ii8+CiAgPC9nPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MTcuNywxNjMuNWMtMTMuNywwLTIzLjQtNi4yLTI5LjctMTguNWw4MS44LTMzLjlsLTIuNy02LjljLTUtMTMuNy0yMC42LTM4LjktNTIuMy0zOC45ICAgYy0zMS41LDAtNTcuNywyNC43LTU3LjcsNjEuMWMwLDM0LjMsMjUuOSw2MS4yLDYwLjcsNjEuMmMyOCwwLDQ0LjItMTcuMiw1MC45LTI3LjFsLTIwLjgtMTMuOSAgIEM3NDAuOCwxNTYuNyw3MzEuMywxNjMuNSw3MTcuNywxNjMuNUw3MTcuNywxNjMuNXogTT'+
			'cxNS43LDg4LjFjMTAuOCwwLDIwLjIsNS42LDIzLjIsMTMuNWwtNTUuMywyMi45ICAgQzY4My42LDk4LjgsNzAxLjgsODguMSw3MTUuNyw4OC4xTDcxNS43LDg4LjF6IiBpZD0icGF0aDQzODkiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTM5LjcsNTQuNVYzNC4yaC0xMTR2MjAuM0g4NzJ2MTQ1LjYgICBoMjEuNFY1NC41SDkzOS43eiIgaWQ9InBhdGg0Mjg2XzAwMDAwMTMxMzUyNTUyOTY0MzgyNjEzNzEwMDAwMDA2MDk1MjM3MjU4OTY4OTQwNDc5XyIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05NjksMTM3LjZjMC04LjYsMy0xNi4yLDktMjIuOCAgIGM1LjgtNi40LDEyLjctOS43LDIw'+
			'LjgtOS45YzUuNiwwLDkuOSwwLjcsMTIuNiwxLjlsNi4zLTIwLjhjLTQuMi0xLjgtOS41LTIuNy0xNS42LTIuN2MtNi42LDAuMi0xMy4yLDIuMy0xOS43LDYuMyAgIGMtNi44LDQuNC0xMS4yLDkuNS0xMy40LDE1LjRoLTAuOFY4Ni42aC0yMC42djExMy41SDk2OVYxMzcuNnoiIGlkPSJwYXRoNDI4OV8wMDAwMDExMjYyMjk1NTA5MDI0NzE3MTU1MDAwMDAwODI5OTg1ODE0NzQwNTczNTMxN18iLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTA1Ni4xLDE0OS45YzUuNi00LjIsMTIuOS02LjMsMjEuNy02LjMgICBjMTEuNywwLDIwLjksMi43LDI3LjcsOGMwLDktMy41LDE2LjctMTAuNCwyMy4zYy'+
			'03LjEsNi42LTE1LjIsOS45LTI0LjEsOS45Yy02LjIsMC0xMS43LTEuOC0xNi40LTUuNWMtNC44LTMuNi03LjEtOC4zLTcuMS0xNCAgIEMxMDQ3LjMsMTU5LjEsMTA1MC4yLDE1NCwxMDU2LjEsMTQ5Ljl6IE0xMDI4LjksMTA1bDE4LjksMTIuMWM2LjctMTAsMTYuMi0xNS4xLDI4LjItMTUuMWM3LjcsMCwxNC41LDIuNiwyMC42LDcuNyAgIGM1LjgsNS4zLDguOCwxMS43LDguOCwxOC45djQuOWMtOC4yLTQuNy0xOC42LTcuMS0zMS4zLTcuMWMtMTUsMC0yNi45LDMuNS0zNS42LDEwLjRjLTguOCw3LTEzLjIsMTYuNC0xMy4yLDI4LjIgICBjMCwxMS4yLDQuMiwyMC40LDEyLjYsMjcuN2M4LjQsNy41'+
			'LDE4LjgsMTEuMiwzMS4zLDExLjJjMTQuNiwwLDI2LjQtNi40LDM1LjQtMTkuNWgwLjh2MTUuNmgyMC4zdi02OS45YzAtMTQuNi00LjYtMjYuMi0xMy43LTM0LjggICBjLTkuMi04LjItMjEuNS0xMi4zLTM3LTEyLjNDMTA1NC43LDgzLDEwMzkuNCw5MC40LDEwMjguOSwxMDV6IiBpZD0icGF0aDQyOTJfMDAwMDAxNzgxNzA4NjI5MDIzNzExMzc2ODAwMDAwMDg4NDQ1MjI3MDE0OTQ2MTE1ODdfIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0NTMuNiwxNDkuOWM1LjYtNC4yLDEyLjktNi4zLDIxLjctNi4zICAgYzExLjcsMCwyMC45LDIuNywyNy43LDhjMCw5LTMuNSwxNi43LTEwLjQsMjMuM2'+
			'MtNy4xLDYuNi0xNS4yLDkuOS0yNC4xLDkuOWMtNi4yLDAtMTEuNy0xLjgtMTYuNC01LjVjLTQuOC0zLjYtNy4xLTguMy03LjEtMTQgICBDMTQ0NC45LDE1OS4xLDE0NDcuNywxNTQsMTQ1My42LDE0OS45eiBNMTQyNi41LDEwNWwxOC45LDEyLjFjNi43LTEwLDE2LjItMTUuMSwyOC4yLTE1LjFjNy43LDAsMTQuNSwyLjYsMjAuNiw3LjcgICBjNS44LDUuMyw4LjgsMTEuNyw4LjgsMTguOXY0LjljLTguMi00LjctMTguNi03LjEtMzEuMy03LjFjLTE1LDAtMjYuOSwzLjUtMzUuNiwxMC40Yy04LjgsNy0xMy4yLDE2LjQtMTMuMiwyOC4yICAgYzAsMTEuMiw0LjIsMjAuNCwxMi42LDI3LjdjOC40LDcu'+
			'NSwxOC44LDExLjIsMzEuMywxMS4yYzE0LjYsMCwyNi40LTYuNCwzNS40LTE5LjVoMC44djE1LjZoMjAuM3YtNjkuOWMwLTE0LjYtNC42LTI2LjItMTMuNy0zNC44ICAgYy05LjItOC4yLTIxLjUtMTIuMy0zNy0xMi4zQzE0NTIuMyw4MywxNDM2LjksOTAuNCwxNDI2LjUsMTA1eiIgaWQ9InBhdGg0MjkyXzAwMDAwMDEwMjcwODMyODA4MjU1MTg1MDgwMDAwMDAxNDc4MjM2MjI0NjU0ODI3MTgyXyIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTQ5LjgsMjAwLjFoMjEuNHYtNjIuOCAgIGMwLTkuNSwyLjgtMTcuNyw4LjUtMjQuN2M1LjYtNi43LDEyLjctMTAuMSwyMS40LTEwLjFjMTguMSwwLD'+
			'I3LjQsOS4zLDI4LDI3Ljd2NjkuOWgyMS40di03MS4zYzAtMTQuNi0zLjgtMjUuOS0xMS4yLTM0ICAgQzEyMzEuNyw4NywxMjIxLDgzLDEyMDcuMSw4M2MtNy4zLDAtMTQuNCwxLjktMjEuMSw1LjVjLTYuNiwzLjctMTEuNSw4LjQtMTQuOCwxNGgtMC44Vjg2LjZoLTIwLjZWMjAwLjF6IiBpZD0icGF0aDQyOTVfMDAwMDAxNzY3NTQwMTY2NjgxNjIwNjQyMjAwMDAwMDQzNTEzODYyMzQ4OTc0NDg2MjdfIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzMjguNiwxMzQuNmwtMTcuMy00LjQgICBjLTEyLjMtMi43LTE4LjQtNy40LTE4LjQtMTRjMC00LDIuMy03LjQsNi45LTEwLjFjNC40LTIuNyw5'+
			'LjMtNC4xLDE0LjgtNC4xYzYsMCwxMS41LDEuMywxNi40LDMuOGM0LjcsMi43LDguMiw2LjYsMTAuNCwxMS41ICAgbDE4LjktOGMtMy4yLTgtOC44LTE0LjQtMTctMTkuMmMtOC4xLTQuNy0xNy4xLTcuMS0yNy4xLTcuMWMtMTMuMiwwLTI0LDMuMi0zMi40LDkuM2MtOC40LDYuMi0xMi42LDE0LjUtMTIuNiwyNC45ICAgYzAsMTUuOCwxMSwyNi4zLDMzLjIsMzEuOGwxOS41LDQuOWMxMS4xLDMuNSwxNi43LDguOCwxNi43LDE1LjljMCw0LTIuMyw3LjUtNi45LDEwLjRjLTQuOCwyLjktMTAuNCw0LjQtMTcsNC40ICAgYy02LjQsMC0xMi4zLTEuOC0xNy41LTUuNWMtNS4zLTMuOC05LjMtOS4yLTEyLj'+
			'EtMTYuMmwtMTkuMiw4LjJjMy42LDkuNyw5LjksMTcuNSwxOC42LDIzLjZjOC42LDYsMTguNiw5LDMwLjIsOSAgIGMxMywwLDIzLjktMy41LDMyLjYtMTAuNGM4LjYtNi43LDEyLjktMTUuMSwxMi45LTI0LjlDMTM2Mi4zLDE1MS42LDEzNTEsMTQwLjMsMTMyOC42LDEzNC42eiIgaWQ9InBhdGg0Mjk4XzAwMDAwMDI3NTc2MjI0MzI0NjE3NTgxOTUwMDAwMDE2Mjg1NjkwMDQzMDY4NDg2MzI0XyIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMzgwLjcsMzQuMnYxNjUuOWgyMS40VjM0LjJIMTM4MC43eiIgaWQ9InBhdGg0MzAxXzAwMDAwMDAxNjQ1MjkxOTQwMTY3NzAxNzcwMDAwMDAxOTM2OTMz'+
			'Mzc3OTk3NTQ4NzEyXyIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjEwLjQsMTk5bC02LjYtMTguOSAgIGMtMS41LDAuNS0zLDEtNC43LDEuNGMtMS42LDAuNC0zLjMsMC41LTQuOSwwLjVjLTMuNywwLTctMS40LTkuOS00LjFjLTIuOS0yLjUtNC40LTcuNy00LjQtMTUuNHYtNTYuNWgyNy43Vjg2LjZIMTU4MFY1MS44aC0yMS40ICAgdjM0LjhoLTIwdjE5LjVoMjB2NjMuNmMwLjEsMTAuMSwzLjMsMTgsOS4zLDIzLjljNi4yLDUuNywxMy44LDguNSwyMyw4LjVDMTU5OC41LDIwMiwxNjA1LDIwMSwxNjEwLjQsMTk5eiIgaWQ9InBhdGg0MzA0XzAwMDAwMTE0NzY2MDk0MTEzNjg2MzI3MDEwMD'+
			'AwMDAyNzg4ODU1OTEzMzY5MDUxMzA1XyIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNzA5LjcsMTk1LjdjOC45LTUuMywxNi0xMi43LDIxLjQtMjIuNSAgIGwtMTkuMi05LjNjLTcuNywxMy43LTE4LjQsMjAuNi0zMi4xLDIwLjZjLTkuOSwwLTE4LjMtMy40LTI1LjItMTAuMWMtNy4zLTYuOS0xMS4xLTE2LTExLjItMjcuMWg4OS4xbDAuMy0yLjIgICBjMC0xOS43LTQuOS0zNS0xNC44LTQ1LjhjLTEwLjEtMTAuOC0yMy41LTE2LjItNDAuMy0xNi4yYy0xNi40LDAtMjkuOSw1LjctNDAuMywxN2MtMTAuNCwxMS41LTE1LjYsMjYtMTUuNiw0My4zICAgYzAsMTcuNSw1LjMsMzIsMTYuMiw0My4z'+
			'YzEwLjgsMTEuNSwyNC41LDE3LjMsNDEuMSwxNy4zQzE2OTAuMywyMDMuOSwxNzAwLjUsMjAxLjIsMTcwOS43LDE5NS43eiBNMTY1Ni41LDEwOS42ICAgYzUuNi00LjcsMTIuNi03LjEsMjAuOC03LjFjOS41LDAsMTcuMywyLjYsMjMuMyw3LjdjNS42LDUuMSw4LjgsMTEuNyw5LjYsMTkuNUgxNjQ1QzE2NDYuNywxMjEuNCwxNjUwLjYsMTE0LjgsMTY1Ni41LDEwOS42eiIgaWQ9InBhdGg0MzA3XzAwMDAwMDMxMTczNDE0ODIwNjAzMDUzNzYwMDAwMDAwMTI2MDgxNzAyMTI1Njg2MTg0XyIvPgogPC9nPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPg'+
			'ogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgogPGcvPgo8L3N2Zz4K';
		me._googlelogo__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="googlelogo";
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 108px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._googlelogo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._googlelogo.ggUpdatePosition=function (useTransition) {
		}
		me._golanguage.appendChild(me._googlelogo);
		me._accessiblebox.appendChild(me._golanguage);
		me._splash.appendChild(me._accessiblebox);
		me.divSkin.appendChild(me._splash);
		el=me._button_direction=document.createElement('div');
		el.ggId="button_direction";
		el.ggDx=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 62px;';
		hs+='left : calc(50% - ((82px + 0px) / 2) + 50px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_direction.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_right=document.createElement('div');
		els=me._button_image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSAgIEMtMTE4LjksMzY2LTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTQ5LDM5OC4xbC0zMC4xLDMwLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMTEuMy0xMS4zYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTcuNy0xNy43ICAgbC0xNy43LTE3LjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxMS4zLTExLjNjMC42LTAuNiwxLjYtMC42LDIuMiwwbDMwLjEsMzBjMC4zLDAuMywwLjQsMC43'+
			'LDAuNCwxLjEgICBDLTE0OC41LDM5Ny40LTE0OC42LDM5Ny44LTE0OSwzOTguMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi41LDM3OS4zbDE3LjcsMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMTEuMywxMS4zYzAuNiwwLjYsMS42LDAuNiwyLjIsMGwzMC4xLTMwLjEgICBjMC4zLTAuMywwLjUtMC43LDAuNC0xLjFjMC0wLjQtMC4xLTAuOC0wLjQtMS4xbC0zMC4xLTMwYy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTExLjMsMTEuM0MtMTkzLjEsMzc3LjctMTkzLjEsMzc4LjctMTkyLjUsMzc5LjMgICB6Ii8+Ci'+
			'A8L2c+Cjwvc3ZnPgo=';
		me._button_image_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._button_image_right.ggUpdateText=function() {
			let altText = player._('spin panorama right');
			me._button_image_right.ggSubElement.setAttribute('alt', altText);
			if (me._button_image_right.ggSubElementOver) {
				me._button_image_right.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._button_image_right.ggSubElementActive) {
				me._button_image_right.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._button_image_right.ggUpdateText();
		el.ggId="button_image_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.setAttribute('aria-keyshortcuts', 'Right');
		el.style.transformOrigin='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		me._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.onmouseout=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		me._button_image_right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_image_right']) {
				player.changePanLog(-0.5,true);
			}
		}
		me._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_right);
		el=me._button_image_left=document.createElement('div');
		els=me._button_image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjhjLTMxLDAtNTYuMiwyNS4xLTU2LjIsNTYuMnMyNS4xLDU2LjIsNTYuMiw1Ni4yczU2LjItMjUuMSw1Ni4yLTU2LjIgICBDLTExOC44LDM2Ni0xNDQsMzQwLjgtMTc1LDM0MC44eiBNLTE1Ny41LDQxNi45bC0xMS4zLDExLjNjLTAuNiwwLjYtMS41LDAuNi0yLjIsMGwtMzAuMi0zMC4xYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuMSAgIGMwLTAuNSwwLjEtMC44LDAuNC0xLjJsMzAuMi0zMC4xYzAuNi0wLjYsMS41LTAuNiwyLjIsMGwxMS4zLDExLjNjMC42LDAuNiwwLjYsMS41LDAsMi4ybC0xNy43LDE3LjdsMTcu'+
			'NywxNy43ICAgQy0xNTYuOSw0MTUuNC0xNTYuOSw0MTYuMy0xNTcuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny41LDQxNC43bC0xNy43LTE3LjdsMTcuNy0xNy43YzAuNi0wLjYsMC42LTEuNSwwLTIuMmwtMTEuMy0xMS4zYy0wLjYtMC42LTEuNS0wLjYtMi4yLDBsLTMwLjIsMzAuMSAgIGMtMC4zLDAuMy0wLjQsMC43LTAuNCwxLjJjMCwwLjQsMC4yLDAuOCwwLjQsMS4xbDMwLjIsMzAuMWMwLjYsMC42LDEuNSwwLjYsMi4yLDBsMTEuMy0xMS4zQy0xNTYuOSw0MTYuMy0xNTYuOSw0MTUuNC0xNTcuNSw0MTQuNyAgIHoiLz'+
			'4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._button_image_left.ggUpdateText=function() {
			let altText = player._('spin panorama left');
			me._button_image_left.ggSubElement.setAttribute('alt', altText);
			if (me._button_image_left.ggSubElementOver) {
				me._button_image_left.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._button_image_left.ggSubElementActive) {
				me._button_image_left.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._button_image_left.ggUpdateText();
		el.ggId="button_image_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.setAttribute('aria-keyshortcuts', 'Left');
		el.style.transformOrigin='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		me._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.onmouseout=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		me._button_image_left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_image_left']) {
				player.changePanLog(0.5,true);
			}
		}
		me._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_left);
		el=me._button_image_down=document.createElement('div');
		els=me._button_image_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNDMuOCwzOTIuOWwtMzAsMzAuMWMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMzAuMS0zMC4xYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMTEuMy0xMS4zICAgYzAuNi0wLjYsMS42LTAuNiwyLjIsMGwxNy43LDE3LjdsMTcuNy0xNy43YzAuNi0wLjYsMS42LTAuNiwyLjIsMGwxMS4zLDExLjND'+
			'LTE0My4yLDM5MS40LTE0My4yLDM5Mi4zLTE0My44LDM5Mi45eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU3LjMsMzc5LjVsLTE3LjcsMTcuN2wtMTcuNy0xNy43Yy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTExLjMsMTEuM2MtMC42LDAuNi0wLjYsMS42LDAsMi4ybDMwLjEsMzAuMSAgIGMwLjMsMC4zLDAuNywwLjUsMS4xLDAuNGMwLjQsMCwwLjgtMC4xLDEuMS0wLjRsMzAtMzAuMWMwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTExLjMtMTEuM0MtMTU1LjcsMzc4LjktMTU2LjcsMzc4LjktMTU3LjMsMzc5LjV6Ii8+CiA8L2c+Cjwvc3ZnPg'+
			'o=';
		me._button_image_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._button_image_down.ggUpdateText=function() {
			let altText = player._('spin panorama down');
			me._button_image_down.ggSubElement.setAttribute('alt', altText);
			if (me._button_image_down.ggSubElementOver) {
				me._button_image_down.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._button_image_down.ggSubElementActive) {
				me._button_image_down.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._button_image_down.ggUpdateText();
		el.ggId="button_image_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.setAttribute('aria-keyshortcuts', 'Down');
		el.style.transformOrigin='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		me._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.onmouseout=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		me._button_image_down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_image_down']) {
				player.changeTiltLog(-0.5,true);
			}
		}
		me._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_down);
		el=me._button_image_up=document.createElement('div');
		els=me._button_image_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSAgIHogTS0xNDMuOCw0MDMuMmwtMTEuMywxMS4zYy0wLjYsMC42LTEuNiwwLjYtMi4yLDBsLTE3LjctMTcuN2wtMTcuNywxNy43Yy0wLjYsMC42LTEuNiwwLjYtMi4yLDBsLTExLjMtMTEuMyAgIGMtMC42LTAuNi0wLjYtMS42LDAtMi4ybDMwLTMwLjFjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDMwLjEsMzAu'+
			'MUMtMTQzLjIsNDAxLjctMTQzLjIsNDAyLjYtMTQzLjgsNDAzLjJ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTIuNyw0MTQuNWwxNy43LTE3LjdsMTcuNywxNy43YzAuNiwwLjYsMS42LDAuNiwyLjIsMGwxMS4zLTExLjNjMC42LTAuNiwwLjYtMS42LDAtMi4ybC0zMC4xLTMwLjEgICBjLTAuMy0wLjMtMC43LTAuNS0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTMwLDMwLjFjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxMS4zLDExLjMgICBDLTE5NC4zLDQxNS4xLTE5My4zLDQxNS4xLTE5Mi43LDQxNC41eiIvPgogPC9nPgo8L3'+
			'N2Zz4K';
		me._button_image_up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._button_image_up.ggUpdateText=function() {
			let altText = player._('spin panorama up');
			me._button_image_up.ggSubElement.setAttribute('alt', altText);
			if (me._button_image_up.ggSubElementOver) {
				me._button_image_up.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._button_image_up.ggSubElementActive) {
				me._button_image_up.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._button_image_up.ggUpdateText();
		el.ggId="button_image_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.setAttribute('aria-keyshortcuts', 'Up');
		el.style.transformOrigin='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		me._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.onmouseout=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		me._button_image_up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['button_image_up']) {
				player.changeTiltLog(0.5,true);
			}
		}
		me._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		me._button_direction.appendChild(me._button_image_up);
		me.divSkin.appendChild(me._button_direction);
		el=me._hotspots=document.createElement('div');
		el.ggId="hotspots";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 210px;';
		hs+='position : absolute;';
		hs+='top : 298px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._hotspots.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._hotspots);
		el=me._gothumbs=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gothumbs.setAttribute('aria-label', player._('open thumbnail menu of panoramas'));
		}
		el.ggId="gothumbs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 78px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._gothumbs.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gothumbs.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['gothumbs'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gothumbs.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gothumbs.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gothumbs.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gothumbs.ggCurrentLogicStateScaling == 0) {
					me._gothumbs.ggParameter.sx = 1.2;
					me._gothumbs.ggParameter.sy = 1.2;
					me._gothumbs.style.transform=parameterToTransform(me._gothumbs.ggParameter);
					setTimeout(function() {skin.updateSize(me._gothumbs);}, 550);
				}
				else if (me._gothumbs.ggCurrentLogicStateScaling == 1) {
					me._gothumbs.ggParameter.sx = 1.2;
					me._gothumbs.ggParameter.sy = 1.2;
					me._gothumbs.style.transform=parameterToTransform(me._gothumbs.ggParameter);
					setTimeout(function() {skin.updateSize(me._gothumbs);}, 550);
				}
				else {
					me._gothumbs.ggParameter.sx = 1;
					me._gothumbs.ggParameter.sy = 1;
					me._gothumbs.style.transform=parameterToTransform(me._gothumbs.ggParameter);
					setTimeout(function() {skin.updateSize(me._gothumbs);}, 550);
				}
			}
		}
		me._gothumbs.logicBlock_scaling();
		me._gothumbs.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gothumbs.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gothumbs.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gothumbs.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gothumbs.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._gothumbs.style.opacity == 0.0) { me._gothumbs.style.visibility="hidden"; } }, 505);
					me._gothumbs.style.opacity=0;
				}
				else {
					me._gothumbs.style.visibility=me._gothumbs.ggVisible?'inherit':'hidden';
					me._gothumbs.style.opacity=1;
				}
			}
		}
		me._gothumbs.logicBlock_alpha();
		me._gothumbs.onclick=function (e) {
			player.setVariableValue('button', false);
			player.setVariableValue('ht_ani', false);
			player.setVariableValue('thumbs', Number("1.00"));
		}
		me._gothumbs.onmouseover=function (e) {
			me.elementMouseOver['gothumbs']=true;
			me._gothumbs.logicBlock_scaling();
		}
		me._gothumbs.onmousemove=function (e) {
			me._tt_thumbs.style.transition='none';
			me._tt_thumbs.style.visibility=(Number(me._tt_thumbs.style.opacity)>0||!me._tt_thumbs.style.opacity)?'inherit':'hidden';
			me._tt_thumbs.ggVisible=true;
		}
		me._gothumbs.onmouseout=function (e) {
			me._tt_thumbs.style.transition='none';
			me._tt_thumbs.style.visibility='hidden';
			me._tt_thumbs.ggVisible=false;
			me.elementMouseOver['gothumbs']=false;
			me._gothumbs.logicBlock_scaling();
		}
		me._gothumbs.ggCurrentLogicStateScaling = -1;
		me._gothumbs.ggCurrentLogicStateAlpha = -1;
		me._gothumbs.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gothumbs']) {
				me._tt_thumbs.style.transition='none';
				me._tt_thumbs.style.visibility=(Number(me._tt_thumbs.style.opacity)>0||!me._tt_thumbs.style.opacity)?'inherit':'hidden';
				me._tt_thumbs.ggVisible=true;
			}
		}
		me._gothumbs.ggUpdatePosition=function (useTransition) {
		}
		el=me._gothumbs_icon=document.createElement('div');
		els=me._gothumbs_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM0IDM0OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDM0IDM0IiB4bWw6c3BhY2U9InByZXNlcnZlIiB5PSIwcHgiIHZlcnNpb249Ij'+
			'EuMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwLjEsMTEuM0g0LjRjLTAuNiwwLTEtMC40LTEtMVY0LjZjMC0wLjYsMC40LTEsMS0xaDUuN2MwLjYsMCwxLDAuNCwxLDF2NS43QzExLjEsMTAuOSwxMC43LDExLjMsMTAuMSwxMS4zeiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjksMTEuM2gtNS43Yy0wLjYsMC0xLTAuNC0xLTFWNC42YzAtMC42LDAuNC0xLDEtMWg1LjdjMC42LDAsMSwwLjQsMSwxdjUuN0MyMC45LDEwLjksMjAuNSwxMS4zLDE5LjksMTEuM3omI3hhOyYjeDk7Ii8+CiA8'+
			'cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkuNywxMS4zSDI0Yy0wLjYsMC0xLTAuNC0xLTFWNC42YzAtMC42LDAuNC0xLDEtMWg1LjdjMC42LDAsMSwwLjQsMSwxdjUuN0MzMC43LDEwLjksMzAuMywxMS4zLDI5LjcsMTEuM3oiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMC4xLDIxLjFINC40Yy0wLjYsMC0xLTAuNC0xLTF2LTUuN2MwLTAuNiwwLjQtMSwxLTFoNS43YzAuNiwwLDEsMC40LDEsMXY1LjdDMTEuMSwyMC43LDEwLjcsMjEuMSwxMC4xLDIxLjF6JiN4YTsmI3g5OyIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjksMjEuMWgtNS43Yy0wLjYsMC0xLTAuNC0xLTF2LTUuN2MwLTAuNi'+
			'wwLjQtMSwxLTFoNS43YzAuNiwwLDEsMC40LDEsMXY1LjdDMjAuOSwyMC43LDIwLjUsMjEuMSwxOS45LDIxLjEmI3hhOyYjeDk7eiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTI5LjcsMjEuMUgyNGMtMC42LDAtMS0wLjQtMS0xdi01LjdjMC0wLjYsMC40LTEsMS0xaDUuN2MwLjYsMCwxLDAuNCwxLDF2NS43QzMwLjcsMjAuNywzMC4zLDIxLjEsMjkuNywyMS4xeiIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwLjEsMzAuOUg0LjRjLTAuNiwwLTEtMC40LTEtMXYtNS43YzAtMC42LDAuNC0xLDEtMWg1LjdjMC42LDAsMSwwLjQsMSwxdjUuN0MxMS4xLDMwLjUsMTAuNywzMC45LDEwLjEsMzAu'+
			'OXomI3hhOyYjeDk7Ii8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkuOSwzMC45aC01LjdjLTAuNiwwLTEtMC40LTEtMXYtNS43YzAtMC42LDAuNC0xLDEtMWg1LjdjMC42LDAsMSwwLjQsMSwxdjUuN0MyMC45LDMwLjUsMjAuNSwzMC45LDE5LjksMzAuOSYjeGE7JiN4OTt6Ii8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkuNywzMC45SDI0Yy0wLjYsMC0xLTAuNC0xLTF2LTUuN2MwLTAuNiwwLjQtMSwxLTFoNS43YzAuNiwwLDEsMC40LDEsMXY1LjdDMzAuNywzMC41LDMwLjMsMzAuOSwyOS43LDMwLjl6Ii8+Cjwvc3ZnPgo=';
		me._gothumbs_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._gothumbs_icon.ggUpdateText=function() {
			let altText = player._('thumbnails icon 2');
			me._gothumbs_icon.ggSubElement.setAttribute('alt', altText);
			if (me._gothumbs_icon.ggSubElementOver) {
				me._gothumbs_icon.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._gothumbs_icon.ggSubElementActive) {
				me._gothumbs_icon.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._gothumbs_icon.ggUpdateText();
		el.ggId="gothumbs_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._gothumbs_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gothumbs_icon.ggUpdatePosition=function (useTransition) {
		}
		me._gothumbs.appendChild(me._gothumbs_icon);
		me.divSkin.appendChild(me._gothumbs);
		el=me._tt_thumbs=document.createElement('div');
		els=me._tt_thumbs__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 86px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_thumbs.ggUpdateText=function() {
			var params = [];
			var hs = player._("Choose a panorama to view", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_thumbs.ggUpdateText();
		el.appendChild(els);
		me._tt_thumbs.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_thumbs.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbs.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbs.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbs.style.transition='';
				if (me._tt_thumbs.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbs.style.visibility="hidden";
					me._tt_thumbs.ggVisible=false;
				}
				else {
					me._tt_thumbs.style.visibility="hidden";
					me._tt_thumbs.ggVisible=false;
				}
			}
		}
		me._tt_thumbs.logicBlock_visible();
		me._tt_thumbs.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_thumbs);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -263px;';
		hs+='position : absolute;';
		hs+='top : -83px;';
		hs+='visibility : inherit;';
		hs+='width : 133px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			if (
				(
					((player.getVariableValue('button') == true))
				)
			) {
				player.setVariableValue('ht_ani', true);
			}
		}
		me._timer_1.ggDeactivate=function () {
			if (
				(
					((player.getVariableValue('button') == true))
				)
			) {
				player.setVariableValue('ht_ani', false);
			}
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._thumbnails=document.createElement('div');
		el.ggId="thumbnails";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle lightbox";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 9999;';
		hs+='background : rgba(0,0,0,0.901961);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 0%';
		me._thumbnails.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('thumbs') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnails.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnails.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnails.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnails.ggCurrentLogicStateAlpha == 0) {
					me._thumbnails.style.visibility=me._thumbnails.ggVisible?'inherit':'hidden';
					me._thumbnails.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnails.style.opacity == 0.0) { me._thumbnails.style.visibility="hidden"; } }, 505);
					me._thumbnails.style.opacity=0;
				}
			}
		}
		me._thumbnails.logicBlock_alpha();
		me._thumbnails.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbscontainer=document.createElement('div');
		els=me._thumbscontainer__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 264px;';
		hs+='left : 50%;';
		hs+='margin-left : -136.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 273px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbscontainer.ggScrollByX = function(diffX) {
			if(!me._thumbscontainer.ggHorScrollVisible || diffX == 0 || me._thumbscontainer.ggHPercentVisible >= 1.0) return;
			me._thumbscontainer.ggScrollPosX = (me._thumbscontainer__horScrollFg.offsetLeft + diffX);
			me._thumbscontainer.ggScrollPosX = Math.max(me._thumbscontainer.ggScrollPosX, 0);
			me._thumbscontainer.ggScrollPosX = Math.min(me._thumbscontainer.ggScrollPosX, me._thumbscontainer__horScrollBg.offsetWidth - me._thumbscontainer__horScrollFg.offsetWidth);
			me._thumbscontainer__horScrollFg.style.left = me._thumbscontainer.ggScrollPosX + 'px';
			let percentScrolled = me._thumbscontainer.ggScrollPosX / (me._thumbscontainer__horScrollBg.offsetWidth - me._thumbscontainer__horScrollFg.offsetWidth);
			me._thumbscontainer__content.style.left = -(Math.round((me._thumbscontainer.ggContentWidth * (1.0 - me._thumbscontainer.ggHPercentVisible)) * percentScrolled)) + me._thumbscontainer.ggContentLeftOffset + 'px';
			me._thumbscontainer.ggScrollPosXPercent = (me._thumbscontainer__horScrollFg.offsetLeft / me._thumbscontainer__horScrollBg.offsetWidth);
		}
		me._thumbscontainer.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbscontainer.ggHorScrollVisible || diffX == 0 || me._thumbscontainer.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbscontainer.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbscontainer.ggScrollPosX >= me._thumbscontainer__horScrollBg.offsetWidth - me._thumbscontainer__horScrollFg.offsetWidth)) {
					me._thumbscontainer.ggScrollPosX = Math.min(me._thumbscontainer.ggScrollPosX, me._thumbscontainer__horScrollBg.offsetWidth - me._thumbscontainer__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbscontainer.ggScrollPosX <= 0)) {
					me._thumbscontainer.ggScrollPosX = Math.max(me._thumbscontainer.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbscontainer__horScrollFg.style.left = me._thumbscontainer.ggScrollPosX + 'px';
			let percentScrolled = me._thumbscontainer.ggScrollPosX / (me._thumbscontainer__horScrollBg.offsetWidth - me._thumbscontainer__horScrollFg.offsetWidth);
			me._thumbscontainer__content.style.left = -(Math.round((me._thumbscontainer.ggContentWidth * (1.0 - me._thumbscontainer.ggHPercentVisible)) * percentScrolled)) + me._thumbscontainer.ggContentLeftOffset + 'px';
			me._thumbscontainer.ggScrollPosXPercent = (me._thumbscontainer__horScrollFg.offsetLeft / me._thumbscontainer__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbscontainer.ggScrollByY = function(diffY) {
			if(!me._thumbscontainer.ggVertScrollVisible || diffY == 0 || me._thumbscontainer.ggVPercentVisible >= 1.0) return;
			me._thumbscontainer.ggScrollPosY = (me._thumbscontainer__vertScrollFg.offsetTop + diffY);
			me._thumbscontainer.ggScrollPosY = Math.max(me._thumbscontainer.ggScrollPosY, 0);
			me._thumbscontainer.ggScrollPosY = Math.min(me._thumbscontainer.ggScrollPosY, me._thumbscontainer__vertScrollBg.offsetHeight - me._thumbscontainer__vertScrollFg.offsetHeight);
			me._thumbscontainer__vertScrollFg.style.top = me._thumbscontainer.ggScrollPosY + 'px';
			let percentScrolled = me._thumbscontainer.ggScrollPosY / (me._thumbscontainer__vertScrollBg.offsetHeight - me._thumbscontainer__vertScrollFg.offsetHeight);
			me._thumbscontainer__content.style.top = -(Math.round((me._thumbscontainer.ggContentHeight * (1.0 - me._thumbscontainer.ggVPercentVisible)) * percentScrolled)) + me._thumbscontainer.ggContentTopOffset + 'px';
			me._thumbscontainer.ggScrollPosYPercent = (me._thumbscontainer__vertScrollFg.offsetTop / me._thumbscontainer__vertScrollBg.offsetHeight);
		}
		me._thumbscontainer.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbscontainer.ggVertScrollVisible || diffY == 0 || me._thumbscontainer.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbscontainer.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbscontainer.ggScrollPosY >= me._thumbscontainer__vertScrollBg.offsetHeight - me._thumbscontainer__vertScrollFg.offsetHeight)) {
					me._thumbscontainer.ggScrollPosY = Math.min(me._thumbscontainer.ggScrollPosY, me._thumbscontainer__vertScrollBg.offsetHeight - me._thumbscontainer__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbscontainer.ggScrollPosY <= 0)) {
					me._thumbscontainer.ggScrollPosY = Math.max(me._thumbscontainer.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbscontainer__vertScrollFg.style.top = me._thumbscontainer.ggScrollPosY + 'px';
			let percentScrolled = me._thumbscontainer.ggScrollPosY / (me._thumbscontainer__vertScrollBg.offsetHeight - me._thumbscontainer__vertScrollFg.offsetHeight);
			me._thumbscontainer__content.style.top = -(Math.round((me._thumbscontainer.ggContentHeight * (1.0 - me._thumbscontainer.ggVPercentVisible)) * percentScrolled)) + me._thumbscontainer.ggContentTopOffset + 'px';
			me._thumbscontainer.ggScrollPosYPercent = (me._thumbscontainer__vertScrollFg.offsetTop / me._thumbscontainer__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbscontainer.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbscontainer.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbscontainer.ggHPercentVisible);
					me._thumbscontainer.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbscontainer.clientWidth - (me._thumbscontainer.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbscontainer.clientWidth - (me._thumbscontainer.ggVertScrollVisible ? 15 : 0))) * me._thumbscontainer.ggHPercentVisible);
					me._thumbscontainer.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbscontainer.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbscontainer.ggVPercentVisible);
					me._thumbscontainer.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbscontainer.clientHeight - (me._thumbscontainer.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbscontainer.clientHeight - (me._thumbscontainer.ggHorScrollVisible ? 15 : 0))) * me._thumbscontainer.ggVPercentVisible);
					me._thumbscontainer.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbscontainer__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbscontainer.ggDragInertiaX *= 0.65;
				me._thumbscontainer.ggDragInertiaY *= 0.65;
				me._thumbscontainer.ggScrollByX(me._thumbscontainer.ggDragInertiaX);
				me._thumbscontainer.ggScrollByY(me._thumbscontainer.ggDragInertiaY);
				if (Math.abs(me._thumbscontainer.ggDragInertiaX) < 1.0 && Math.abs(me._thumbscontainer.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._thumbscontainer__content.onmouseup = null;
			me._thumbscontainer__content.onmousemove = null;
			me._thumbscontainer__content.ontouchend = null;
			me._thumbscontainer__content.ontouchmove = null;
			me._thumbscontainer__content.onpointerup = null;
			me._thumbscontainer__content.onpointermove = null;
			setTimeout(function() { me._thumbscontainer.ggIsDragging = false; }, 100);
		}
		me._thumbscontainer__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbscontainer.ggDragStartX) > 10 || Math.abs(eventY - me._thumbscontainer.ggDragStartY) > 10) me._thumbscontainer.ggIsDragging = true;
			var diffX = (eventX - me._thumbscontainer.ggDragLastX) * me._thumbscontainer.ggHPercentVisible;
			var diffY = (eventY - me._thumbscontainer.ggDragLastY) * me._thumbscontainer.ggVPercentVisible;
			me._thumbscontainer.ggDragInertiaX = -diffX;
			me._thumbscontainer.ggDragInertiaY = -diffY;
			me._thumbscontainer.ggDragLastX = eventX;
			me._thumbscontainer.ggDragLastY = eventY;
			me._thumbscontainer.ggScrollByX(-diffX);
			me._thumbscontainer.ggScrollByY(-diffY);
		}
		me._thumbscontainer__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbscontainer.ggDragLastX = me._thumbscontainer.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbscontainer.ggDragLastY = me._thumbscontainer.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbscontainer__content.onmouseup = me._thumbscontainer__content.mousetouchend;
			me._thumbscontainer__content.ontouchend = me._thumbscontainer__content.mousetouchend;
			me._thumbscontainer__content.onmousemove = me._thumbscontainer__content.mousetouchmove;
			me._thumbscontainer__content.ontouchmove = me._thumbscontainer__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbscontainer__content.onpointerup = me._thumbscontainer__content.ontouchend;
				me._thumbscontainer__content.onpointermove = me._thumbscontainer__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbscontainer__content.mousetouchstart;
		els.ontouchstart = me._thumbscontainer__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbscontainer__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbscontainer__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 600px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbscontainer__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 600px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbscontainer.ggScrollPosY = 0;
		me._thumbscontainer.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbscontainer.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbscontainer.ggDragInertiaY *= 0.65;
					me._thumbscontainer.ggScrollByY(me._thumbscontainer.ggDragInertiaY);
					if (Math.abs(me._thumbscontainer.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbscontainer.ggDragLastY;
				me._thumbscontainer.ggDragInertiaY = diffY;
				me._thumbscontainer.ggDragLastY = e.clientY;
				me._thumbscontainer.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbscontainer.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbscontainer.ggDragInertiaY *= 0.65;
					me._thumbscontainer.ggScrollByY(me._thumbscontainer.ggDragInertiaY);
					if (Math.abs(me._thumbscontainer.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbscontainer.ggDragLastY;
				me._thumbscontainer.ggDragInertiaY = diffY;
				me._thumbscontainer.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbscontainer.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbscontainer.ggScrollHeight;
			if (e.offsetY < me._thumbscontainer.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbscontainer.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbscontainer__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbscontainer.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbscontainer.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbscontainer.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbscontainer.ggScrollByYSmooth(30 * me._thumbscontainer.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbscontainer__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbscontainer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._thumbscontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbscontainer.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbscontainer.ggScrollPosY / me._thumbscontainer.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbscontainer.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._thumbscontainer.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbscontainer__vertScrollBg.style.visibility = 'inherit';
					me._thumbscontainer__vertScrollFg.style.visibility = 'inherit';
					me._thumbscontainer.ggVertScrollVisible = true;
				} else {
					me._thumbscontainer__vertScrollBg.style.visibility = 'hidden';
					me._thumbscontainer__vertScrollFg.style.visibility = 'hidden';
					me._thumbscontainer.ggVertScrollVisible = false;
				}
				if(me._thumbscontainer.ggVertScrollVisible) {
					me._thumbscontainer.ggAvailableWidth = me._thumbscontainer.clientWidth - 15;
					if (me._thumbscontainer.ggHorScrollVisible) {
						me._thumbscontainer.ggAvailableHeight = me._thumbscontainer.clientHeight - 15;
						me._thumbscontainer.ggAvailableHeightWithScale = me._thumbscontainer.getBoundingClientRect().height - me._thumbscontainer__vertScrollBg.getBoundingClientRect().width;
						me._thumbscontainer__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbscontainer.ggAvailableHeight = me._thumbscontainer.clientHeight;
						me._thumbscontainer.ggAvailableHeightWithScale = me._thumbscontainer.getBoundingClientRect().height;
						me._thumbscontainer__cornerBg.style.visibility = 'hidden';
					}
					me._thumbscontainer__vertScrollBg.style.height = me._thumbscontainer.ggAvailableHeight + 'px';
					me._thumbscontainer.ggVPercentVisible = contentHeight != 0 ? me._thumbscontainer.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbscontainer.ggVPercentVisible > 1.0) me._thumbscontainer.ggVPercentVisible = 1.0;
					me._thumbscontainer.ggScrollHeight =  Math.round(me._thumbscontainer__vertScrollBg.offsetHeight * me._thumbscontainer.ggVPercentVisible);
					me._thumbscontainer__vertScrollFg.style.height = me._thumbscontainer.ggScrollHeight + 'px';
					me._thumbscontainer.ggScrollPosY = me._thumbscontainer.ggScrollPosYPercent * me._thumbscontainer.ggAvailableHeight;
					me._thumbscontainer.ggScrollPosY = Math.min(me._thumbscontainer.ggScrollPosY, me._thumbscontainer__vertScrollBg.offsetHeight - me._thumbscontainer__vertScrollFg.offsetHeight);
					me._thumbscontainer__vertScrollFg.style.top = me._thumbscontainer.ggScrollPosY + 'px';
					if (me._thumbscontainer.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbscontainer.ggScrollPosY / (me._thumbscontainer__vertScrollBg.offsetHeight - me._thumbscontainer__vertScrollFg.offsetHeight);
						me._thumbscontainer__content.style.top = -(Math.round((me._thumbscontainer.ggContentHeight * (1.0 - me._thumbscontainer.ggVPercentVisible)) * percentScrolled)) + me._thumbscontainer.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbscontainer.ggAvailableWidth = me._thumbscontainer.clientWidth;
					me._thumbscontainer.ggScrollPosY = 0;
					me._thumbscontainer.ggScrollPosYPercent = 0.0;
					me._thumbscontainer__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbscontainer__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbscontainer.ggHorScrollVisible || vertScrollWasVisible != me._thumbscontainer.ggVertScrollVisible) {
					skin.updateSize(me._thumbscontainer);
					me._thumbscontainer.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 274;
		el.ggHeight = 215;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumCols = 0;
			var parentWidth = me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbnail_cloner.parentNode.parentNode.ggAvailableWidth : me._thumbnail_cloner.parentNode.parentNode.clientWidth) : me._thumbnail_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnail_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbnail_cloner.offsetLeft) * me._thumbnail_cloner.ggNumRepeat / 100.0) / me._thumbnail_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Thumbnail Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 215px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 0%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbscontainer__content.appendChild(me._thumbnail_cloner);
		me._thumbnails.appendChild(me._thumbscontainer);
		el=me._thumbtext=document.createElement('div');
		els=me._thumbtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbtext";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text schoolbar";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbtext.ggUpdateText=function() {
			var params = [];
			var hs = player._("Choose a 360\xb0 Panorama to View", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbtext.ggUpdateText();
		el.appendChild(els);
		me._thumbtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbtext.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails.appendChild(me._thumbtext);
		el=me._closethumbs=document.createElement('div');
		el.ggUpdateAria = function() {
			me._closethumbs.setAttribute('aria-label', player._('close thumbnail menu of panoramas'));
		}
		els=me._closethumbs__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="closethumbs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text closebutton";
		el.ggType='text';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._closethumbs.ggUpdateText=function() {
			var params = [];
			var hs = player._("&#xd7;", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._closethumbs.ggUpdateText();
		el.appendChild(els);
		me._closethumbs.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._closethumbs.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['closethumbs'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._closethumbs.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._closethumbs.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._closethumbs.style.transition='transform 500ms ease 0ms';
				if (me._closethumbs.ggCurrentLogicStateScaling == 0) {
					me._closethumbs.ggParameter.sx = 1.2;
					me._closethumbs.ggParameter.sy = 1.2;
					me._closethumbs.style.transform=parameterToTransform(me._closethumbs.ggParameter);
					setTimeout(function() {skin.updateSize(me._closethumbs);}, 550);
				}
				else {
					me._closethumbs.ggParameter.sx = 1;
					me._closethumbs.ggParameter.sy = 1;
					me._closethumbs.style.transform=parameterToTransform(me._closethumbs.ggParameter);
					setTimeout(function() {skin.updateSize(me._closethumbs);}, 550);
				}
			}
		}
		me._closethumbs.logicBlock_scaling();
		me._closethumbs.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('thumbs') == Number("1")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._closethumbs.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._closethumbs.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._closethumbs.style.transition='transform 500ms ease 0ms';
				if (me._closethumbs.ggCurrentLogicStateTabIndex == 0) {
					me._closethumbs.setAttribute('tabindex', '0');
				}
				else {
					me._closethumbs.setAttribute('tabindex', '-1');
				}
			}
		}
		me._closethumbs.logicBlock_tabindex();
		me._closethumbs.onclick=function (e) {
			player.setVariableValue('thumbs', Number("0.00"));
		}
		me._closethumbs.ondblclick=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnails.style.transition='none';
			} else {
				me._thumbnails.style.transition='all 250ms ease-out 0ms';
			}
			me._thumbnails.style.opacity='0';
			me._thumbnails.style.visibility='hidden';
		}
		me._closethumbs.onmouseover=function (e) {
			me.elementMouseOver['closethumbs']=true;
			me._closethumbs.logicBlock_scaling();
		}
		me._closethumbs.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._closethumbs__text)
					return;
				}
			}
			me.elementMouseOver['closethumbs']=false;
			me._closethumbs.logicBlock_scaling();
		}
		me._closethumbs.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails.appendChild(me._closethumbs);
		me.divSkin.appendChild(me._thumbnails);
		el=me._gonext=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gonext.setAttribute('aria-label', player._('go to next panorama'));
		}
		el.ggId="gonext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.style.transformOrigin='50% 50%';
		me._gonext.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gonext.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['gonext'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gonext.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gonext.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gonext.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gonext.ggCurrentLogicStateScaling == 0) {
					me._gonext.ggParameter.sx = 1.2;
					me._gonext.ggParameter.sy = 1.2;
					me._gonext.style.transform=parameterToTransform(me._gonext.ggParameter);
					setTimeout(function() {skin.updateSize(me._gonext);}, 550);
				}
				else {
					me._gonext.ggParameter.sx = 1;
					me._gonext.ggParameter.sy = 1;
					me._gonext.style.transform=parameterToTransform(me._gonext.ggParameter);
					setTimeout(function() {skin.updateSize(me._gonext);}, 550);
				}
			}
		}
		me._gonext.logicBlock_scaling();
		me._gonext.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gonext.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gonext.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gonext.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gonext.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._gonext.style.opacity == 0.0) { me._gonext.style.visibility="hidden"; } }, 505);
					me._gonext.style.opacity=0;
				}
				else {
					me._gonext.style.visibility=me._gonext.ggVisible?'inherit':'hidden';
					me._gonext.style.opacity=1;
				}
			}
		}
		me._gonext.logicBlock_alpha();
		me._gonext.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._gonext.onmouseover=function (e) {
			me.elementMouseOver['gonext']=true;
			me._gonext.logicBlock_scaling();
		}
		me._gonext.onmousemove=function (e) {
			me._tt_next.style.transition='none';
			me._tt_next.style.visibility=(Number(me._tt_next.style.opacity)>0||!me._tt_next.style.opacity)?'inherit':'hidden';
			me._tt_next.ggVisible=true;
		}
		me._gonext.onmouseout=function (e) {
			me._tt_next.style.transition='none';
			me._tt_next.style.visibility='hidden';
			me._tt_next.ggVisible=false;
			me.elementMouseOver['gonext']=false;
			me._gonext.logicBlock_scaling();
		}
		me._gonext.ggCurrentLogicStateScaling = -1;
		me._gonext.ggCurrentLogicStateAlpha = -1;
		me._gonext.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gonext']) {
				me._tt_next.style.transition='none';
				me._tt_next.style.visibility=(Number(me._tt_next.style.opacity)>0||!me._tt_next.style.opacity)?'inherit':'hidden';
				me._tt_next.ggVisible=true;
			}
		}
		me._gonext.ggUpdatePosition=function (useTransition) {
		}
		el=me._gonext_icon2=document.createElement('div');
		els=me._gonext_icon2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkuMiAxNC43OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDkuMiAxNC43IiB2ZXJzaW9uPSIxLj'+
			'EiIHk9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTkuMSw3LjJDOSw2LjcsOC45LDYuMyw4LjYsNkwzLjEsMC41Yy0wLjgtMC43LTEuOS0wLjctMi42LDBjLTAuNywwLjgtMC43LDEuOSwwLDIuN2w0LjIsNC4ybC00LjIsNC4yJiN4YTsmI3g5O2MtMC40LDAuOC0wLjQsMS44LDAsMi42YzAuOCwwLjcsMS45LDAuNywyLjYsMGw1LjUtNS40QzksOC4zLDkuMiw3LjcsOS4xLDcuMnoiLz4KPC9zdmc+Cg==';
		me._gonext_icon2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._gonext_icon2.ggUpdateText=function() {
			let altText = player._('next panorama icon 2');
			me._gonext_icon2.ggSubElement.setAttribute('alt', altText);
			if (me._gonext_icon2.ggSubElementOver) {
				me._gonext_icon2.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._gonext_icon2.ggSubElementActive) {
				me._gonext_icon2.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._gonext_icon2.ggUpdateText();
		el.ggId="gonext_icon2";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((12px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._gonext_icon2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gonext_icon2.ggUpdatePosition=function (useTransition) {
		}
		me._gonext.appendChild(me._gonext_icon2);
		me.divSkin.appendChild(me._gonext);
		el=me._tt_next=document.createElement('div');
		els=me._tt_next__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 136px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_next.ggUpdateText=function() {
			var params = [];
			var hs = player._("Next panorama", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_next.ggUpdateText();
		el.appendChild(els);
		me._tt_next.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_next.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_next.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_next.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_next.style.transition='';
				if (me._tt_next.ggCurrentLogicStateVisible == 0) {
					me._tt_next.style.visibility="hidden";
					me._tt_next.ggVisible=false;
				}
				else {
					me._tt_next.style.visibility="hidden";
					me._tt_next.ggVisible=false;
				}
			}
		}
		me._tt_next.logicBlock_visible();
		me._tt_next.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_next);
		el=me._goprev=document.createElement('div');
		el.ggUpdateAria = function() {
			me._goprev.setAttribute('aria-label', player._('go to previous panorama'));
		}
		el.ggId="goprev";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 178px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._goprev.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._goprev.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['goprev'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._goprev.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._goprev.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._goprev.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._goprev.ggCurrentLogicStateScaling == 0) {
					me._goprev.ggParameter.sx = 1.2;
					me._goprev.ggParameter.sy = 1.2;
					me._goprev.style.transform=parameterToTransform(me._goprev.ggParameter);
					setTimeout(function() {skin.updateSize(me._goprev);}, 550);
				}
				else {
					me._goprev.ggParameter.sx = 1;
					me._goprev.ggParameter.sy = 1;
					me._goprev.style.transform=parameterToTransform(me._goprev.ggParameter);
					setTimeout(function() {skin.updateSize(me._goprev);}, 550);
				}
			}
		}
		me._goprev.logicBlock_scaling();
		me._goprev.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._goprev.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._goprev.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._goprev.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._goprev.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._goprev.style.opacity == 0.0) { me._goprev.style.visibility="hidden"; } }, 505);
					me._goprev.style.opacity=0;
				}
				else {
					me._goprev.style.visibility=me._goprev.ggVisible?'inherit':'hidden';
					me._goprev.style.opacity=1;
				}
			}
		}
		me._goprev.logicBlock_alpha();
		me._goprev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._goprev.onmouseover=function (e) {
			me.elementMouseOver['goprev']=true;
			me._goprev.logicBlock_scaling();
		}
		me._goprev.onmousemove=function (e) {
			me._tt_prev.style.transition='none';
			me._tt_prev.style.visibility=(Number(me._tt_prev.style.opacity)>0||!me._tt_prev.style.opacity)?'inherit':'hidden';
			me._tt_prev.ggVisible=true;
		}
		me._goprev.onmouseout=function (e) {
			me._tt_prev.style.transition='none';
			me._tt_prev.style.visibility='hidden';
			me._tt_prev.ggVisible=false;
			me.elementMouseOver['goprev']=false;
			me._goprev.logicBlock_scaling();
		}
		me._goprev.ggCurrentLogicStateScaling = -1;
		me._goprev.ggCurrentLogicStateAlpha = -1;
		me._goprev.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['goprev']) {
				me._tt_prev.style.transition='none';
				me._tt_prev.style.visibility=(Number(me._tt_prev.style.opacity)>0||!me._tt_prev.style.opacity)?'inherit':'hidden';
				me._tt_prev.ggVisible=true;
			}
		}
		me._goprev.ggUpdatePosition=function (useTransition) {
		}
		el=me._goprev_icon2=document.createElement('div');
		els=me._goprev_icon2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDkuMiAxNC43OyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDkuMiAxNC43IiB2ZXJzaW9uPSIxLj'+
			'EiIHk9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsNy41QzAuMSw4LDAuMiw4LjQsMC41LDguN0w2LDE0LjJjMC44LDAuNywxLjksMC43LDIuNiwwYzAuNy0wLjgsMC43LTEuOSwwLTIuN0w0LjQsNy4zbDQuMi00LjImI3hhOyYjeDk7QzksMi4zLDksMS4zLDguNiwwLjVDNy44LTAuMiw2LjctMC4yLDYsMC41TDAuNSw1LjlDMC4xLDYuNC0wLjEsNywwLDcuNXoiLz4KPC9zdmc+Cg==';
		me._goprev_icon2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._goprev_icon2.ggUpdateText=function() {
			let altText = player._('previous panorama icon 2');
			me._goprev_icon2.ggSubElement.setAttribute('alt', altText);
			if (me._goprev_icon2.ggSubElementOver) {
				me._goprev_icon2.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._goprev_icon2.ggSubElementActive) {
				me._goprev_icon2.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._goprev_icon2.ggUpdateText();
		el.ggId="goprev_icon2";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((12px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 12px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._goprev_icon2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._goprev_icon2.ggUpdatePosition=function (useTransition) {
		}
		me._goprev.appendChild(me._goprev_icon2);
		me.divSkin.appendChild(me._goprev);
		el=me._tt_prev=document.createElement('div');
		els=me._tt_prev__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_prev";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_prev.ggUpdateText=function() {
			var params = [];
			var hs = player._("Previous panorama", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_prev.ggUpdateText();
		el.appendChild(els);
		me._tt_prev.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_prev.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_prev.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_prev.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_prev.style.transition='';
				if (me._tt_prev.ggCurrentLogicStateVisible == 0) {
					me._tt_prev.style.visibility="hidden";
					me._tt_prev.ggVisible=false;
				}
				else {
					me._tt_prev.style.visibility="hidden";
					me._tt_prev.ggVisible=false;
				}
			}
		}
		me._tt_prev.logicBlock_visible();
		me._tt_prev.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_prev);
		el=me._gorotate=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gorotate.setAttribute('aria-label', player._('start and stop autorotation'));
		}
		el.ggId="gorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 228px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._gorotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gorotate.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['gorotate'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gorotate.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gorotate.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gorotate.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gorotate.ggCurrentLogicStateScaling == 0) {
					me._gorotate.ggParameter.sx = 1.2;
					me._gorotate.ggParameter.sy = 1.2;
					me._gorotate.style.transform=parameterToTransform(me._gorotate.ggParameter);
					setTimeout(function() {skin.updateSize(me._gorotate);}, 550);
				}
				else {
					me._gorotate.ggParameter.sx = 1;
					me._gorotate.ggParameter.sy = 1;
					me._gorotate.style.transform=parameterToTransform(me._gorotate.ggParameter);
					setTimeout(function() {skin.updateSize(me._gorotate);}, 550);
				}
			}
		}
		me._gorotate.logicBlock_scaling();
		me._gorotate.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gorotate.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gorotate.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gorotate.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gorotate.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._gorotate.style.opacity == 0.0) { me._gorotate.style.visibility="hidden"; } }, 505);
					me._gorotate.style.opacity=0;
				}
				else {
					me._gorotate.style.visibility=me._gorotate.ggVisible?'inherit':'hidden';
					me._gorotate.style.opacity=1;
				}
			}
		}
		me._gorotate.logicBlock_alpha();
		me._gorotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._gorotate.onmouseover=function (e) {
			me.elementMouseOver['gorotate']=true;
			me._gorotate.logicBlock_scaling();
		}
		me._gorotate.onmousemove=function (e) {
			me._tt_rotate.style.transition='none';
			me._tt_rotate.style.visibility=(Number(me._tt_rotate.style.opacity)>0||!me._tt_rotate.style.opacity)?'inherit':'hidden';
			me._tt_rotate.ggVisible=true;
		}
		me._gorotate.onmouseout=function (e) {
			me._tt_rotate.style.transition='none';
			me._tt_rotate.style.visibility='hidden';
			me._tt_rotate.ggVisible=false;
			me.elementMouseOver['gorotate']=false;
			me._gorotate.logicBlock_scaling();
		}
		me._gorotate.ggCurrentLogicStateScaling = -1;
		me._gorotate.ggCurrentLogicStateAlpha = -1;
		me._gorotate.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gorotate']) {
				me._tt_rotate.style.transition='none';
				me._tt_rotate.style.visibility=(Number(me._tt_rotate.style.opacity)>0||!me._tt_rotate.style.opacity)?'inherit':'hidden';
				me._tt_rotate.ggVisible=true;
			}
		}
		me._gorotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._gorotate_icon=document.createElement('div');
		els=me._gorotate_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNi44NSAxOS44NCI+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmIiBkPSJNMTUuNTMsMTAuMDlhMS4zMywxLjMzLDAsMCwwLTEuMzIsMS4zM0E1Ljc5LDUuNzksMCwxLDEsOC4wNyw1LjY4VjguMjJhLjM3LjM3LDAsMCwwLC4zNS4zNWguMjRsNi43NS0zLjlhLjMuMywwLDAsMCwuMTItLjQ4TDE1LjI5LDQsOC41NC4wNWMtLjIzLS4xMi0uMzUsMC0uNDcuMTJWM2E4LjQyLDguNDIsMCwxLDAsOC43OCw4LjQxQTEuMzMsMS4zMywwLDAsMCwxNS41MywxMC4wOVoiLz4KPC9zdmc+Cg==';
		me._gorotate_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._gorotate_icon.ggUpdateText=function() {
			let altText = player._('rotate icon 1');
			me._gorotate_icon.ggSubElement.setAttribute('alt', altText);
			if (me._gorotate_icon.ggSubElementOver) {
				me._gorotate_icon.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._gorotate_icon.ggSubElementActive) {
				me._gorotate_icon.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._gorotate_icon.ggUpdateText();
		el.ggId="gorotate_icon";
		el.ggDx=0;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._gorotate_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gorotate_icon.ggUpdatePosition=function (useTransition) {
		}
		me._gorotate.appendChild(me._gorotate_icon);
		me.divSkin.appendChild(me._gorotate);
		el=me._tt_rotate=document.createElement('div');
		els=me._tt_rotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 236px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_rotate.ggUpdateText=function() {
			var params = [];
			var hs = player._("Toggle autorotate", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_rotate.ggUpdateText();
		el.appendChild(els);
		me._tt_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_rotate.style.transition='';
				if (me._tt_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_rotate.style.visibility="hidden";
					me._tt_rotate.ggVisible=false;
				}
				else {
					me._tt_rotate.style.visibility="hidden";
					me._tt_rotate.ggVisible=false;
				}
			}
		}
		me._tt_rotate.logicBlock_visible();
		me._tt_rotate.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_rotate);
		el=me._gophotos=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gophotos.setAttribute('aria-label', player._('open and close media gallery menu'));
		}
		el.ggId="gophotos";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 278px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._gophotos.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gophotos.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['gophotos'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gophotos.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gophotos.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gophotos.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gophotos.ggCurrentLogicStateScaling == 0) {
					me._gophotos.ggParameter.sx = 1.2;
					me._gophotos.ggParameter.sy = 1.2;
					me._gophotos.style.transform=parameterToTransform(me._gophotos.ggParameter);
					setTimeout(function() {skin.updateSize(me._gophotos);}, 550);
				}
				else {
					me._gophotos.ggParameter.sx = 1;
					me._gophotos.ggParameter.sy = 1;
					me._gophotos.style.transform=parameterToTransform(me._gophotos.ggParameter);
					setTimeout(function() {skin.updateSize(me._gophotos);}, 550);
				}
			}
		}
		me._gophotos.logicBlock_scaling();
		me._gophotos.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('has_photo_button') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gophotos.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gophotos.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gophotos.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gophotos.ggCurrentLogicStateVisible == 0) {
					me._gophotos.style.visibility="hidden";
					me._gophotos.ggVisible=false;
				}
				else {
					me._gophotos.style.visibility=(Number(me._gophotos.style.opacity)>0||!me._gophotos.style.opacity)?'inherit':'hidden';
					me._gophotos.ggVisible=true;
				}
			}
		}
		me._gophotos.logicBlock_visible();
		me._gophotos.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gophotos.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gophotos.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gophotos.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gophotos.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._gophotos.style.opacity == 0.0) { me._gophotos.style.visibility="hidden"; } }, 505);
					me._gophotos.style.opacity=0;
				}
				else {
					me._gophotos.style.visibility=me._gophotos.ggVisible?'inherit':'hidden';
					me._gophotos.style.opacity=1;
				}
			}
		}
		me._gophotos.logicBlock_alpha();
		me._gophotos.onclick=function (e) {
			player.setVariableValue('gallerymenu', player.getVariableValue('gallerymenu') - Number("1.00"));
			if (
				(
					((player.getVariableValue('gallerymenu') < Number("2")))
				)
			) {
				player.setVariableValue('gallerymenu', Number("3.00"));
			}
		}
		me._gophotos.onmouseover=function (e) {
			me.elementMouseOver['gophotos']=true;
			me._gophotos.logicBlock_scaling();
		}
		me._gophotos.onmousemove=function (e) {
			if (
				(
					((player.getVariableValue('ExtValue') != "keyboard")) && 
					((player.getVariableValue('gallerymenu') == Number("0")))
				)
			) {
				me._tt_photos.style.transition='none';
				me._tt_photos.style.visibility=(Number(me._tt_photos.style.opacity)>0||!me._tt_photos.style.opacity)?'inherit':'hidden';
				me._tt_photos.ggVisible=true;
			}
		}
		me._gophotos.onmouseout=function (e) {
			me._tt_photos.style.transition='none';
			me._tt_photos.style.visibility='hidden';
			me._tt_photos.ggVisible=false;
			me.elementMouseOver['gophotos']=false;
			me._gophotos.logicBlock_scaling();
		}
		me._gophotos.ggCurrentLogicStateScaling = -1;
		me._gophotos.ggCurrentLogicStateVisible = -1;
		me._gophotos.ggCurrentLogicStateAlpha = -1;
		me._gophotos.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gophotos']) {
				if (
					(
						((player.getVariableValue('ExtValue') != "keyboard")) && 
						((player.getVariableValue('gallerymenu') == Number("0")))
					)
				) {
					me._tt_photos.style.transition='none';
					me._tt_photos.style.visibility=(Number(me._tt_photos.style.opacity)>0||!me._tt_photos.style.opacity)?'inherit':'hidden';
					me._tt_photos.ggVisible=true;
				}
			}
		}
		me._gophotos.ggUpdatePosition=function (useTransition) {
		}
		el=me._gophotos_icon=document.createElement('div');
		els=me._gophotos_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC43MSAxNi40NCI+CiA8Y2lyY2xlIGN4PSIxMC4zNSIgc3R5bGU9ImZpbGw6I2ZmZiIgY3k9IjguOTMiIHI9IjIuNzQiLz4KIDxwYXRoIHN0eWxlPSJmaWxsOiNmZmYiIGQ9Ik0xNSwyLjMzQzE1LDIuMTMsMTQuMjEsMCwxMy4yOSwwSDcuNjFDNi43LDAsNS44OSwyLjIzLDUuNzgsMi4zM0gyLjY0QTIuNDgsMi40OCwwLDAsMCwwLDQuODdWMTMuOGEyLjc2LDIuNzYsMCwwLDAsMi42NCwyLjY0SDE4LjA2QTIuNjksMi42OSwwLDAsMCwyMC43LDEzLjhWNWEyLjQ0LDIuNDQsMCwwLDAtMi4zMy0yLjY0Wk'+
			'0xMC4zNSwxMy40YTQuNDcsNC40NywwLDEsMSw0LjQ3LTQuNDdBNC42Niw0LjY2LDAsMCwxLDEwLjM1LDEzLjRaIi8+Cjwvc3ZnPgo=';
		me._gophotos_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._gophotos_icon.ggUpdateText=function() {
			let altText = player._('photo icon 1');
			me._gophotos_icon.ggSubElement.setAttribute('alt', altText);
			if (me._gophotos_icon.ggSubElementOver) {
				me._gophotos_icon.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._gophotos_icon.ggSubElementActive) {
				me._gophotos_icon.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._gophotos_icon.ggUpdateText();
		el.ggId="gophotos_icon";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg buttonicons";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._gophotos_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gophotos_icon.ggUpdatePosition=function (useTransition) {
		}
		me._gophotos.appendChild(me._gophotos_icon);
		me.divSkin.appendChild(me._gophotos);
		el=me._tt_photos=document.createElement('div');
		els=me._tt_photos__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_photos";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 286px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: right;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_photos.ggUpdateText=function() {
			var params = [];
			var hs = player._("Open\/Close Media Gallery", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_photos.ggUpdateText();
		el.appendChild(els);
		me._tt_photos.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_photos.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_photos.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_photos.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_photos.style.transition='';
				if (me._tt_photos.ggCurrentLogicStateVisible == 0) {
					me._tt_photos.style.visibility="hidden";
					me._tt_photos.ggVisible=false;
				}
				else {
					me._tt_photos.style.visibility="hidden";
					me._tt_photos.ggVisible=false;
				}
			}
		}
		me._tt_photos.logicBlock_visible();
		me._tt_photos.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_photos);
		el=me._tt_gophotos=document.createElement('div');
		els=me._tt_gophotos__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_gophotos";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 220px;';
		hs+='left : 91px;';
		hs+='position : absolute;';
		hs+='top : 226px;';
		hs+='visibility : hidden;';
		hs+='width : 299px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_gophotos.ggUpdateText=function() {
			var params = [];
			var hs = player._("<b>Choose a Media Gallery to View:<\/b>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_gophotos.ggUpdateText();
		el.appendChild(els);
		me._tt_gophotos.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_gophotos.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('gallerymenu') == Number("3")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('gallerymenu') == Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_gophotos.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_gophotos.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_gophotos.style.transition='';
				if (me._tt_gophotos.ggCurrentLogicStateVisible == 0) {
					me._tt_gophotos.style.visibility=(Number(me._tt_gophotos.style.opacity)>0||!me._tt_gophotos.style.opacity)?'inherit':'hidden';
					me._tt_gophotos.ggVisible=true;
				}
				else if (me._tt_gophotos.ggCurrentLogicStateVisible == 1) {
					me._tt_gophotos.style.visibility="hidden";
					me._tt_gophotos.ggVisible=false;
				}
				else {
					me._tt_gophotos.style.visibility="hidden";
					me._tt_gophotos.ggVisible=false;
				}
			}
		}
		me._tt_gophotos.logicBlock_visible();
		me._tt_gophotos.ggUpdatePosition=function (useTransition) {
		}
		el=me._gallery1=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gallery1.setAttribute('aria-label', player._('open media gallery 2'));
		}
		els=me._gallery1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Gallery1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text photolink";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'listitem');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._gallery1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u2022  Video: My School Story", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery1.ggUpdateText();
		el.appendChild(els);
		me._gallery1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery1.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('gallerymenu') == Number("3")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._gallery1.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._gallery1.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._gallery1.style.transition='';
				if (me._gallery1.ggCurrentLogicStateTabIndex == 0) {
					me._gallery1.setAttribute('tabindex', '0');
				}
				else {
					me._gallery1.setAttribute('tabindex', '-1');
				}
			}
		}
		me._gallery1.logicBlock_tabindex();
		me._gallery1.onclick=function (e) {
				me._photobox.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"photo_video\/myschoolstory.html\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._photobox.ggUpdateText();
			me._photobox.ggTextDiv.scrollTop = 0;
			me._iframe_trigger.onclick.call(me._iframe_trigger);
			player.setVariableValue('gallerymenu', Number("0.00"));
		}
		me._gallery1.onmouseover=function (e) {
			me.elementMouseOver['gallery1']=true;
		}
		me._gallery1.onmousemove=function (e) {
			player.setVariableValue('gallerymenu', Number("3.00"));
		}
		me._gallery1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._gallery1__text)
					return;
				}
			}
			me.elementMouseOver['gallery1']=false;
		}
		me._gallery1.ggCurrentLogicStateTabIndex = -1;
		me._gallery1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gallery1']) {
				player.setVariableValue('gallerymenu', Number("3.00"));
			}
		}
		me._gallery1.ggUpdatePosition=function (useTransition) {
		}
		me._tt_gophotos.appendChild(me._gallery1);
		el=me._gallery2=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gallery2.setAttribute('aria-label', player._('open media gallery 1'));
		}
		els=me._gallery2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Gallery2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text photolink";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'listitem');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._gallery2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u2022  Photo Gallery", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery2.ggUpdateText();
		el.appendChild(els);
		me._gallery2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery2.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('gallerymenu') == Number("3")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._gallery2.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._gallery2.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._gallery2.style.transition='';
				if (me._gallery2.ggCurrentLogicStateTabIndex == 0) {
					me._gallery2.setAttribute('tabindex', '0');
				}
				else {
					me._gallery2.setAttribute('tabindex', '-1');
				}
			}
		}
		me._gallery2.logicBlock_tabindex();
		me._gallery2.onclick=function (e) {
			me._iframe_trigger.onclick.call(me._iframe_trigger);
				me._photobox.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"photo_video\/northside.html\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._photobox.ggUpdateText();
			me._photobox.ggTextDiv.scrollTop = 0;
			player.setVariableValue('gallerymenu', Number("0.00"));
		}
		me._gallery2.onmouseover=function (e) {
			me.elementMouseOver['gallery2']=true;
		}
		me._gallery2.onmousemove=function (e) {
			player.setVariableValue('gallerymenu', Number("3.00"));
		}
		me._gallery2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._gallery2__text)
					return;
				}
			}
			me.elementMouseOver['gallery2']=false;
		}
		me._gallery2.ggCurrentLogicStateTabIndex = -1;
		me._gallery2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gallery2']) {
				player.setVariableValue('gallerymenu', Number("3.00"));
			}
		}
		me._gallery2.ggUpdatePosition=function (useTransition) {
		}
		me._tt_gophotos.appendChild(me._gallery2);
		el=me._gallery3=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gallery3.setAttribute('aria-label', player._('open media gallery 3'));
		}
		els=me._gallery3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Gallery3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text photolink";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'listitem');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._gallery3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u2022  Gallery3", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery3.ggUpdateText();
		el.appendChild(els);
		me._gallery3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery3.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('gallerymenu') == Number("3")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._gallery3.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._gallery3.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._gallery3.style.transition='';
				if (me._gallery3.ggCurrentLogicStateTabIndex == 0) {
					me._gallery3.setAttribute('tabindex', '0');
				}
				else {
					me._gallery3.setAttribute('tabindex', '-1');
				}
			}
		}
		me._gallery3.logicBlock_tabindex();
		me._gallery3.onclick=function (e) {
				me._photobox.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"photo_video\/sample.html\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._photobox.ggUpdateText();
			me._photobox.ggTextDiv.scrollTop = 0;
			me._iframe_trigger.onclick.call(me._iframe_trigger);
			player.setVariableValue('gallerymenu', Number("0.00"));
		}
		me._gallery3.onmouseover=function (e) {
			me.elementMouseOver['gallery3']=true;
		}
		me._gallery3.onmousemove=function (e) {
			player.setVariableValue('gallerymenu', Number("3.00"));
		}
		me._gallery3.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._gallery3__text)
					return;
				}
			}
			me.elementMouseOver['gallery3']=false;
		}
		me._gallery3.ggCurrentLogicStateTabIndex = -1;
		me._gallery3.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gallery3']) {
				player.setVariableValue('gallerymenu', Number("3.00"));
			}
		}
		me._gallery3.ggUpdatePosition=function (useTransition) {
		}
		me._tt_gophotos.appendChild(me._gallery3);
		el=me._gallery4=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gallery4.setAttribute('aria-label', player._('open media gallery 4'));
		}
		els=me._gallery4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Gallery4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text photolink";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'listitem');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._gallery4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u2022  Gallery4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery4.ggUpdateText();
		el.appendChild(els);
		me._gallery4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery4.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('gallerymenu') == Number("3")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._gallery4.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._gallery4.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._gallery4.style.transition='';
				if (me._gallery4.ggCurrentLogicStateTabIndex == 0) {
					me._gallery4.setAttribute('tabindex', '0');
				}
				else {
					me._gallery4.setAttribute('tabindex', '-1');
				}
			}
		}
		me._gallery4.logicBlock_tabindex();
		me._gallery4.onclick=function (e) {
				me._photobox.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"photo_video\/sample.html\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._photobox.ggUpdateText();
			me._photobox.ggTextDiv.scrollTop = 0;
			me._iframe_trigger.onclick.call(me._iframe_trigger);
			player.setVariableValue('gallerymenu', Number("0.00"));
		}
		me._gallery4.onmouseover=function (e) {
			me.elementMouseOver['gallery4']=true;
		}
		me._gallery4.onmousemove=function (e) {
			player.setVariableValue('gallerymenu', Number("3.00"));
		}
		me._gallery4.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._gallery4__text)
					return;
				}
			}
			me.elementMouseOver['gallery4']=false;
		}
		me._gallery4.ggCurrentLogicStateTabIndex = -1;
		me._gallery4.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gallery4']) {
				player.setVariableValue('gallerymenu', Number("3.00"));
			}
		}
		me._gallery4.ggUpdatePosition=function (useTransition) {
		}
		me._tt_gophotos.appendChild(me._gallery4);
		el=me._gallery5=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gallery5.setAttribute('aria-label', player._('open media gallery 5'));
		}
		els=me._gallery5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Gallery5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text photolink";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'listitem');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._gallery5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u2022  Gallery5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._gallery5.ggUpdateText();
		el.appendChild(els);
		me._gallery5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery5.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('gallerymenu') == Number("3")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._gallery5.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._gallery5.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._gallery5.style.transition='';
				if (me._gallery5.ggCurrentLogicStateTabIndex == 0) {
					me._gallery5.setAttribute('tabindex', '0');
				}
				else {
					me._gallery5.setAttribute('tabindex', '-1');
				}
			}
		}
		me._gallery5.logicBlock_tabindex();
		me._gallery5.onclick=function (e) {
				me._photobox.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"photo_video\/sample.html\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._photobox.ggUpdateText();
			me._photobox.ggTextDiv.scrollTop = 0;
			me._iframe_trigger.onclick.call(me._iframe_trigger);
			player.setVariableValue('gallerymenu', Number("0.00"));
		}
		me._gallery5.onmouseover=function (e) {
			me.elementMouseOver['gallery5']=true;
		}
		me._gallery5.onmousemove=function (e) {
			player.setVariableValue('gallerymenu', Number("3.00"));
		}
		me._gallery5.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._gallery5__text)
					return;
				}
			}
			me.elementMouseOver['gallery5']=false;
		}
		me._gallery5.ggCurrentLogicStateTabIndex = -1;
		me._gallery5.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gallery5']) {
				player.setVariableValue('gallerymenu', Number("3.00"));
			}
		}
		me._gallery5.ggUpdatePosition=function (useTransition) {
		}
		me._tt_gophotos.appendChild(me._gallery5);
		me.divSkin.appendChild(me._tt_gophotos);
		el=me._photobox=document.createElement('div');
		els=me._photobox__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="photobox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lightbox";
		el.ggType='text';
		hs ='';
		hs+='z-index: 9999;';
		hs+='background : rgba(255,255,255,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Esc');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._photobox.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._photobox.ggUpdateText();
		el.appendChild(els);
		me._photobox.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._photobox.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('photos_on') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._photobox.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._photobox.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._photobox.style.transition='opacity 500ms ease 0ms';
				if (me._photobox.ggCurrentLogicStateAlpha == 0) {
					me._photobox.style.visibility=me._photobox.ggVisible?'inherit':'hidden';
					me._photobox.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._photobox.style.opacity == 0.0) { me._photobox.style.visibility="hidden"; } }, 505);
					me._photobox.style.opacity=0;
				}
			}
		}
		me._photobox.logicBlock_alpha();
		me._photobox.ggUpdatePosition=function (useTransition) {
		}
		el=me._closephotobox=document.createElement('div');
		el.ggUpdateAria = function() {
			me._closephotobox.setAttribute('aria-label', player._('close media gallery overlay'));
		}
		els=me._closephotobox__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="closephotobox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text closebutton";
		el.ggType='text';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._closephotobox.ggUpdateText=function() {
			var params = [];
			var hs = player._("&#xd7;", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._closephotobox.ggUpdateText();
		el.appendChild(els);
		me._closephotobox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._closephotobox.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['closephotobox'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._closephotobox.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._closephotobox.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._closephotobox.style.transition='transform 500ms ease 0ms';
				if (me._closephotobox.ggCurrentLogicStateScaling == 0) {
					me._closephotobox.ggParameter.sx = 1.2;
					me._closephotobox.ggParameter.sy = 1.2;
					me._closephotobox.style.transform=parameterToTransform(me._closephotobox.ggParameter);
					setTimeout(function() {skin.updateSize(me._closephotobox);}, 550);
				}
				else {
					me._closephotobox.ggParameter.sx = 1;
					me._closephotobox.ggParameter.sy = 1;
					me._closephotobox.style.transform=parameterToTransform(me._closephotobox.ggParameter);
					setTimeout(function() {skin.updateSize(me._closephotobox);}, 550);
				}
			}
		}
		me._closephotobox.logicBlock_scaling();
		me._closephotobox.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('photos_on') == Number("1")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._closephotobox.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._closephotobox.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._closephotobox.style.transition='transform 500ms ease 0ms';
				if (me._closephotobox.ggCurrentLogicStateTabIndex == 0) {
					me._closephotobox.setAttribute('tabindex', '0');
				}
				else {
					me._closephotobox.setAttribute('tabindex', '-1');
				}
			}
		}
		me._closephotobox.logicBlock_tabindex();
		me._closephotobox.onclick=function (e) {
				me._photobox.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._photobox.ggUpdateText();
			me._photobox.ggTextDiv.scrollTop = 0;
			player.setVariableValue('photos_on', Number("0.00"));
		}
		me._closephotobox.onmouseover=function (e) {
			me.elementMouseOver['closephotobox']=true;
			me._closephotobox.logicBlock_scaling();
		}
		me._closephotobox.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._closephotobox__text)
					return;
				}
			}
			me.elementMouseOver['closephotobox']=false;
			me._closephotobox.logicBlock_scaling();
		}
		me._closephotobox.ggUpdatePosition=function (useTransition) {
		}
		me._photobox.appendChild(me._closephotobox);
		el=me._iframe_trigger=document.createElement('div');
		el.ggId="iframe_trigger";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe_trigger.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe_trigger.onclick=function (e) {
			player.setVariableValue('photos_on', Number("1.00"));
		}
		me._iframe_trigger.ondblclick=function (e) {
			if (player.transitionsDisabled) {
				me._photobox.style.transition='none';
			} else {
				me._photobox.style.transition='all 500ms ease-out 0ms';
			}
			me._photobox.style.opacity='1';
			me._photobox.style.visibility=me._photobox.ggVisible?'inherit':'hidden';
		}
		me._iframe_trigger.ggUpdatePosition=function (useTransition) {
		}
		me._photobox.appendChild(me._iframe_trigger);
		me.divSkin.appendChild(me._photobox);
		el=me._godirections=document.createElement('div');
		el.ggUpdateAria = function() {
			me._godirections.setAttribute('aria-label', player._('open directions map overlay'));
		}
		el.ggId="godirections";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 328px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._godirections.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._godirections.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('has_photo_button') == false))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._godirections.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._godirections.ggConditionsTruePosition = newConditionsTruePosition;
				me._godirections.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._godirections.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -50;
				}
					me._godirections.style.left=(20+deltaX) + 'px';
					me._godirections.style.top=(328+deltaY) + 'px';
			}
		}
		me._godirections.logicBlock_position();
		me._godirections.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['godirections'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._godirections.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._godirections.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._godirections.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._godirections.ggCurrentLogicStateScaling == 0) {
					me._godirections.ggParameter.sx = 1.2;
					me._godirections.ggParameter.sy = 1.2;
					me._godirections.style.transform=parameterToTransform(me._godirections.ggParameter);
					setTimeout(function() {skin.updateSize(me._godirections);}, 550);
				}
				else {
					me._godirections.ggParameter.sx = 1;
					me._godirections.ggParameter.sy = 1;
					me._godirections.style.transform=parameterToTransform(me._godirections.ggParameter);
					setTimeout(function() {skin.updateSize(me._godirections);}, 550);
				}
			}
		}
		me._godirections.logicBlock_scaling();
		me._godirections.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._godirections.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._godirections.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._godirections.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._godirections.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._godirections.style.opacity == 0.0) { me._godirections.style.visibility="hidden"; } }, 505);
					me._godirections.style.opacity=0;
				}
				else {
					me._godirections.style.visibility=me._godirections.ggVisible?'inherit':'hidden';
					me._godirections.style.opacity=1;
				}
			}
		}
		me._godirections.logicBlock_alpha();
		me._godirections.onclick=function (e) {
			player.setVariableValue('directions', Number("1.00"));
		}
		me._godirections.onmouseover=function (e) {
			me.elementMouseOver['godirections']=true;
			me._godirections.logicBlock_scaling();
		}
		me._godirections.onmousemove=function (e) {
			me._tt_directions.style.transition='none';
			me._tt_directions.style.visibility=(Number(me._tt_directions.style.opacity)>0||!me._tt_directions.style.opacity)?'inherit':'hidden';
			me._tt_directions.ggVisible=true;
		}
		me._godirections.onmouseout=function (e) {
			me._tt_directions.style.transition='none';
			me._tt_directions.style.visibility='hidden';
			me._tt_directions.ggVisible=false;
			me.elementMouseOver['godirections']=false;
			me._godirections.logicBlock_scaling();
		}
		me._godirections.ggConditionsTruePosition = [];
		me._godirections.ggCurrentLogicStateScaling = -1;
		me._godirections.ggCurrentLogicStateAlpha = -1;
		me._godirections.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['godirections']) {
				me._tt_directions.style.transition='none';
				me._tt_directions.style.visibility=(Number(me._tt_directions.style.opacity)>0||!me._tt_directions.style.opacity)?'inherit':'hidden';
				me._tt_directions.ggVisible=true;
			}
		}
		me._godirections.ggUpdatePosition=function (useTransition) {
		}
		el=me._godirections_icon=document.createElement('div');
		els=me._godirections_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS42OCAxNi4yMiI+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIgZD0iTTE1LjM4LDQuMTcsOC4zMS4wOGEuNTkuNTksMCwwLDAtLjg5LjUxVjMuMTNIMS43QTEuNywxLjcsMCwwLDAsMCw0LjgzdjkuNjlhMS43LDEuNywwLDAsMCwzLjQsMHYtOGg0VjguNzZhLjU5LjU5LDAsMCwwLC44OS41MWw3LjA3LTQuMDhBLjU5LjU5LDAsMCwwLDE1LjM4LDQuMTdaIi8+Cjwvc3ZnPgo=';
		me._godirections_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._godirections_icon.ggUpdateText=function() {
			let altText = player._('direction icon 1');
			me._godirections_icon.ggSubElement.setAttribute('alt', altText);
			if (me._godirections_icon.ggSubElementOver) {
				me._godirections_icon.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._godirections_icon.ggSubElementActive) {
				me._godirections_icon.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._godirections_icon.ggUpdateText();
		el.ggId="godirections_icon";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._godirections_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._godirections_icon.ggUpdatePosition=function (useTransition) {
		}
		me._godirections.appendChild(me._godirections_icon);
		me.divSkin.appendChild(me._godirections);
		el=me._tt_directions=document.createElement('div');
		els=me._tt_directions__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_directions";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 336px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_directions.ggUpdateText=function() {
			var params = [];
			var hs = player._("Directions to campus", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_directions.ggUpdateText();
		el.appendChild(els);
		me._tt_directions.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_directions.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('has_photo_button') == false))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._tt_directions.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._tt_directions.ggConditionsTruePosition = newConditionsTruePosition;
				me._tt_directions.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._tt_directions.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -50;
				}
					me._tt_directions.style.left=(70+deltaX) + 'px';
					me._tt_directions.style.top=(336+deltaY) + 'px';
			}
		}
		me._tt_directions.logicBlock_position();
		me._tt_directions.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_directions.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_directions.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_directions.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._tt_directions.ggCurrentLogicStateVisible == 0) {
					me._tt_directions.style.visibility="hidden";
					me._tt_directions.ggVisible=false;
				}
				else {
					me._tt_directions.style.visibility="hidden";
					me._tt_directions.ggVisible=false;
				}
			}
		}
		me._tt_directions.logicBlock_visible();
		me._tt_directions.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_directions);
		el=me._directions_box=document.createElement('div');
		el.ggId="directions_box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle lightbox";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 9998;';
		hs+='background : rgba(255,255,255,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._directions_box.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._directions_box.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('directions') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._directions_box.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._directions_box.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._directions_box.style.transition='opacity 500ms ease 0ms';
				if (me._directions_box.ggCurrentLogicStateAlpha == 0) {
					me._directions_box.style.visibility=me._directions_box.ggVisible?'inherit':'hidden';
					me._directions_box.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._directions_box.style.opacity == 0.0) { me._directions_box.style.visibility="hidden"; } }, 505);
					me._directions_box.style.opacity=0;
				}
			}
		}
		me._directions_box.logicBlock_alpha();
		me._directions_box.ggUpdatePosition=function (useTransition) {
		}
		el=me._directions_innerbox=document.createElement('div');
		els=me._directions_innerbox__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="directions_innerbox";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._directions_innerbox.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._directions_innerbox.ggUpdateText();
		el.appendChild(els);
		me._directions_innerbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._directions_innerbox.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('directions') == Number("1")))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._directions_innerbox.ggCurrentLogicStateText != newLogicStateText) {
				me._directions_innerbox.ggCurrentLogicStateText = newLogicStateText;
				me._directions_innerbox.style.transition='';
				if (me._directions_innerbox.ggCurrentLogicStateText == 0) {
					if (me._directions_innerbox.ggUpdateText) {
					me._directions_innerbox.ggUpdateText=function() {
						var params = [];
						var hs = player._("<iframe tabindex=\"-1\" src=\"map\/map.html\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._directions_innerbox.ggUpdateText();
					} else {
						if (me._directions_innerbox.ggUpdatePosition) me._directions_innerbox.ggUpdatePosition();
					}
				}
				else {
					if (me._directions_innerbox.ggUpdateText) {
					me._directions_innerbox.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._directions_innerbox.ggUpdateText();
					} else {
						if (me._directions_innerbox.ggUpdatePosition) me._directions_innerbox.ggUpdatePosition();
					}
				}
			}
		}
		me._directions_innerbox.logicBlock_text();
		me._directions_innerbox.ggUpdatePosition=function (useTransition) {
		}
		el=me._closedirections_box=document.createElement('div');
		el.ggUpdateAria = function() {
			me._closedirections_box.setAttribute('aria-label', player._('close directions map overlay'));
		}
		els=me._closedirections_box__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="closedirections_box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text closebutton";
		el.ggType='text';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : -17px;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._closedirections_box.ggUpdateText=function() {
			var params = [];
			var hs = player._("&#xd7;", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._closedirections_box.ggUpdateText();
		el.appendChild(els);
		me._closedirections_box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._closedirections_box.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['closedirections_box'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._closedirections_box.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._closedirections_box.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._closedirections_box.style.transition='transform 500ms ease 0ms';
				if (me._closedirections_box.ggCurrentLogicStateScaling == 0) {
					me._closedirections_box.ggParameter.sx = 1.2;
					me._closedirections_box.ggParameter.sy = 1.2;
					me._closedirections_box.style.transform=parameterToTransform(me._closedirections_box.ggParameter);
					setTimeout(function() {skin.updateSize(me._closedirections_box);}, 550);
				}
				else {
					me._closedirections_box.ggParameter.sx = 1;
					me._closedirections_box.ggParameter.sy = 1;
					me._closedirections_box.style.transform=parameterToTransform(me._closedirections_box.ggParameter);
					setTimeout(function() {skin.updateSize(me._closedirections_box);}, 550);
				}
			}
		}
		me._closedirections_box.logicBlock_scaling();
		me._closedirections_box.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('directions') == Number("1")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._closedirections_box.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._closedirections_box.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._closedirections_box.style.transition='transform 500ms ease 0ms';
				if (me._closedirections_box.ggCurrentLogicStateTabIndex == 0) {
					me._closedirections_box.setAttribute('tabindex', '0');
				}
				else {
					me._closedirections_box.setAttribute('tabindex', '-1');
				}
			}
		}
		me._closedirections_box.logicBlock_tabindex();
		me._closedirections_box.onclick=function (e) {
			player.setVariableValue('directions', Number("0.00"));
		}
		me._closedirections_box.onmouseover=function (e) {
			me.elementMouseOver['closedirections_box']=true;
			me._closedirections_box.logicBlock_scaling();
		}
		me._closedirections_box.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._closedirections_box__text)
					return;
				}
			}
			me.elementMouseOver['closedirections_box']=false;
			me._closedirections_box.logicBlock_scaling();
		}
		me._closedirections_box.ggUpdatePosition=function (useTransition) {
		}
		me._directions_innerbox.appendChild(me._closedirections_box);
		me._directions_box.appendChild(me._directions_innerbox);
		me.divSkin.appendChild(me._directions_box);
		el=me._gocontact=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gocontact.setAttribute('aria-label', player._('open contact information overlay'));
		}
		el.ggId="gocontact";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 378px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._gocontact.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gocontact.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('has_photo_button') == false))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._gocontact.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._gocontact.ggConditionsTruePosition = newConditionsTruePosition;
				me._gocontact.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gocontact.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -50;
				}
					me._gocontact.style.left=(20+deltaX) + 'px';
					me._gocontact.style.top=(378+deltaY) + 'px';
			}
		}
		me._gocontact.logicBlock_position();
		me._gocontact.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['gocontact'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gocontact.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gocontact.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gocontact.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gocontact.ggCurrentLogicStateScaling == 0) {
					me._gocontact.ggParameter.sx = 1.2;
					me._gocontact.ggParameter.sy = 1.2;
					me._gocontact.style.transform=parameterToTransform(me._gocontact.ggParameter);
					setTimeout(function() {skin.updateSize(me._gocontact);}, 550);
				}
				else {
					me._gocontact.ggParameter.sx = 1;
					me._gocontact.ggParameter.sy = 1;
					me._gocontact.style.transform=parameterToTransform(me._gocontact.ggParameter);
					setTimeout(function() {skin.updateSize(me._gocontact);}, 550);
				}
			}
		}
		me._gocontact.logicBlock_scaling();
		me._gocontact.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gocontact.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gocontact.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gocontact.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gocontact.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._gocontact.style.opacity == 0.0) { me._gocontact.style.visibility="hidden"; } }, 505);
					me._gocontact.style.opacity=0;
				}
				else {
					me._gocontact.style.visibility=me._gocontact.ggVisible?'inherit':'hidden';
					me._gocontact.style.opacity=1;
				}
			}
		}
		me._gocontact.logicBlock_alpha();
		me._gocontact.onclick=function (e) {
			player.setVariableValue('contact', Number("1.00"));
		}
		me._gocontact.onmouseover=function (e) {
			me.elementMouseOver['gocontact']=true;
			me._gocontact.logicBlock_scaling();
		}
		me._gocontact.onmousemove=function (e) {
			me._tt_contact.style.transition='none';
			me._tt_contact.style.visibility=(Number(me._tt_contact.style.opacity)>0||!me._tt_contact.style.opacity)?'inherit':'hidden';
			me._tt_contact.ggVisible=true;
		}
		me._gocontact.onmouseout=function (e) {
			me._tt_contact.style.transition='none';
			me._tt_contact.style.visibility='hidden';
			me._tt_contact.ggVisible=false;
			me.elementMouseOver['gocontact']=false;
			me._gocontact.logicBlock_scaling();
		}
		me._gocontact.ggConditionsTruePosition = [];
		me._gocontact.ggCurrentLogicStateScaling = -1;
		me._gocontact.ggCurrentLogicStateAlpha = -1;
		me._gocontact.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['gocontact']) {
				me._tt_contact.style.transition='none';
				me._tt_contact.style.visibility=(Number(me._tt_contact.style.opacity)>0||!me._tt_contact.style.opacity)?'inherit':'hidden';
				me._tt_contact.ggVisible=true;
			}
		}
		me._gocontact.ggUpdatePosition=function (useTransition) {
		}
		el=me._gocontact_icon1=document.createElement('div');
		els=me._gocontact_icon1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI4LjUgMjcuNTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyOC41IDI3LjUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgdm'+
			'Vyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjgsMTFjLTAuMS0xLjYtMC42LTMtMS41LTQuM2MtMi40LTMuNi01LjktNS4zLTEwLjEtNS45Yy0wLjYtMC4xLTIuOS0wLjItMy4xLTAuMmMtMC42LDAuMS0xLjIsMC4xLTEuOCwwLjImI3hhOyYjeDk7QzguMywxLjMsNS41LDIuNiwzLjMsNUMxLDcuNSwwLDEwLjQsMC42LDEzLjhjMC41LDIuMiwxLjYsMy45LDMuMiw1LjRjMC40LDAuMywwLjQsMC42LDAuMywxYy0wLjUsMS45LTEsMy43LTEuNSw1LjYmI3hhOyYjeDk7QzIuNCwyNi40'+
			'LDIuOCwyNywzLjQsMjdjMC4yLDAsMC41LTAuMSwwLjctMC4yYzItMS4zLDQtMi42LDYtMy45YzAuMi0wLjEsMC40LTAuMiwwLjYtMC4yYzEuOSwwLjMsMy43LDAuNCw1LjYsMC4yJiN4YTsmI3g5O2MyLjgtMC4zLDUuMy0xLjMsNy41LTNDMjYuNywxNy42LDI4LjMsMTQuOCwyOCwxMXogTTguNCwxNS40Yy0xLDAtMS45LTAuOS0xLjktMS45czAuOS0xLjksMS45LTEuOWMwLjksMCwxLjksMC45LDEuOSwxLjkmI3hhOyYjeDk7UzkuNCwxNS40LDguNCwxNS40eiBNMTQuMiwxNS40Yy0xLDAtMS45LTEtMS45LTEuOWMwLTEsMS0xLjksMS45LTEuOWMxLDAsMS45LDEsMS45LDEuOUMxNi4xLDE0LjYsMT'+
			'UuMiwxNS41LDE0LjIsMTUuNHogTTIwLjEsMTUuNCYjeGE7JiN4OTtjLTEsMC0xLjktMC45LTEuOS0xLjlzMC45LTEuOSwxLjktMS45czEuOSwwLjksMS45LDEuOVMyMS4xLDE1LjQsMjAuMSwxNS40eiIvPgo8L3N2Zz4K';
		me._gocontact_icon1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._gocontact_icon1.ggUpdateText=function() {
			let altText = player._('contact icon 1');
			me._gocontact_icon1.ggSubElement.setAttribute('alt', altText);
			if (me._gocontact_icon1.ggSubElementOver) {
				me._gocontact_icon1.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._gocontact_icon1.ggSubElementActive) {
				me._gocontact_icon1.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._gocontact_icon1.ggUpdateText();
		el.ggId="gocontact_icon1";
		el.ggDx=1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((23px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._gocontact_icon1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gocontact_icon1.ggUpdatePosition=function (useTransition) {
		}
		me._gocontact.appendChild(me._gocontact_icon1);
		me.divSkin.appendChild(me._gocontact);
		el=me._tt_contact=document.createElement('div');
		els=me._tt_contact__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_contact";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 386px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_contact.ggUpdateText=function() {
			var params = [];
			var hs = player._("Contact us", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_contact.ggUpdateText();
		el.appendChild(els);
		me._tt_contact.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_contact.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('has_photo_button') == false))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._tt_contact.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._tt_contact.ggConditionsTruePosition = newConditionsTruePosition;
				me._tt_contact.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._tt_contact.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -50;
				}
					me._tt_contact.style.left=(70+deltaX) + 'px';
					me._tt_contact.style.top=(386+deltaY) + 'px';
			}
		}
		me._tt_contact.logicBlock_position();
		me._tt_contact.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_contact.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_contact.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_contact.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._tt_contact.ggCurrentLogicStateVisible == 0) {
					me._tt_contact.style.visibility="hidden";
					me._tt_contact.ggVisible=false;
				}
				else {
					me._tt_contact.style.visibility="hidden";
					me._tt_contact.ggVisible=false;
				}
			}
		}
		me._tt_contact.logicBlock_visible();
		me._tt_contact.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_contact);
		el=me._contactbox=document.createElement('div');
		els=me._contactbox__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="contactbox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lightbox";
		el.ggType='text';
		hs ='';
		hs+='z-index: 9999;';
		hs+='background : rgba(100,101,105,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._contactbox.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._contactbox.ggUpdateText();
		el.appendChild(els);
		me._contactbox.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._contactbox.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('contact') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._contactbox.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._contactbox.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._contactbox.style.transition='opacity 500ms ease 0ms';
				if (me._contactbox.ggCurrentLogicStateAlpha == 0) {
					me._contactbox.style.visibility=me._contactbox.ggVisible?'inherit':'hidden';
					me._contactbox.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._contactbox.style.opacity == 0.0) { me._contactbox.style.visibility="hidden"; } }, 505);
					me._contactbox.style.opacity=0;
				}
			}
		}
		me._contactbox.logicBlock_alpha();
		me._contactbox.ggUpdatePosition=function (useTransition) {
		}
		el=me._contactbox_inner=document.createElement('div');
		els=me._contactbox_inner__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="contactbox_inner";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text contactbox";
		el.ggType='text';
		hs ='';
		hs+='z-index: 9999;';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 15px 0px 5px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._contactbox_inner.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._contactbox_inner.ggUpdateText();
		el.appendChild(els);
		me._contactbox_inner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._contactbox_inner.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('contact') == Number("1")))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._contactbox_inner.ggCurrentLogicStateText != newLogicStateText) {
				me._contactbox_inner.ggCurrentLogicStateText = newLogicStateText;
				me._contactbox_inner.style.transition='';
				if (me._contactbox_inner.ggCurrentLogicStateText == 0) {
					if (me._contactbox_inner.ggUpdateText) {
					me._contactbox_inner.ggUpdateText=function() {
						var params = [];
						var hs = player._("<img id=\"contactlogo\" src=\"logos\/logo.png\" class=\"center\" alt=\"school logo\"><iframe src=\"connect\/connect.html\" class=\"connecttext\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._contactbox_inner.ggUpdateText();
					} else {
						if (me._contactbox_inner.ggUpdatePosition) me._contactbox_inner.ggUpdatePosition();
					}
				}
				else {
					if (me._contactbox_inner.ggUpdateText) {
					me._contactbox_inner.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._contactbox_inner.ggUpdateText();
					} else {
						if (me._contactbox_inner.ggUpdatePosition) me._contactbox_inner.ggUpdatePosition();
					}
				}
			}
		}
		me._contactbox_inner.logicBlock_text();
		me._contactbox_inner.ggUpdatePosition=function (useTransition) {
		}
		el=me._closecontact=document.createElement('div');
		el.ggUpdateAria = function() {
			me._closecontact.setAttribute('aria-label', player._('close contact information overlay'));
		}
		els=me._closecontact__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="closecontact";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text closebutton";
		el.ggType='text';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : -18px;';
		hs+='top : -18px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._closecontact.ggUpdateText=function() {
			var params = [];
			var hs = player._("&#xd7;", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._closecontact.ggUpdateText();
		el.appendChild(els);
		me._closecontact.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._closecontact.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['closecontact'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._closecontact.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._closecontact.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._closecontact.style.transition='transform 500ms ease 0ms';
				if (me._closecontact.ggCurrentLogicStateScaling == 0) {
					me._closecontact.ggParameter.sx = 1.2;
					me._closecontact.ggParameter.sy = 1.2;
					me._closecontact.style.transform=parameterToTransform(me._closecontact.ggParameter);
					setTimeout(function() {skin.updateSize(me._closecontact);}, 550);
				}
				else {
					me._closecontact.ggParameter.sx = 1;
					me._closecontact.ggParameter.sy = 1;
					me._closecontact.style.transform=parameterToTransform(me._closecontact.ggParameter);
					setTimeout(function() {skin.updateSize(me._closecontact);}, 550);
				}
			}
		}
		me._closecontact.logicBlock_scaling();
		me._closecontact.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('contact') == Number("1")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._closecontact.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._closecontact.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._closecontact.style.transition='transform 500ms ease 0ms';
				if (me._closecontact.ggCurrentLogicStateTabIndex == 0) {
					me._closecontact.setAttribute('tabindex', '0');
				}
				else {
					me._closecontact.setAttribute('tabindex', '-1');
				}
			}
		}
		me._closecontact.logicBlock_tabindex();
		me._closecontact.onclick=function (e) {
			player.setVariableValue('contact', Number("0.00"));
		}
		me._closecontact.onmouseover=function (e) {
			me.elementMouseOver['closecontact']=true;
			me._closecontact.logicBlock_scaling();
		}
		me._closecontact.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._closecontact__text)
					return;
				}
			}
			me.elementMouseOver['closecontact']=false;
			me._closecontact.logicBlock_scaling();
		}
		me._closecontact.ggUpdatePosition=function (useTransition) {
		}
		me._contactbox_inner.appendChild(me._closecontact);
		me._contactbox.appendChild(me._contactbox_inner);
		me.divSkin.appendChild(me._contactbox);
		el=me._goshare=document.createElement('div');
		el.ggUpdateAria = function() {
			me._goshare.setAttribute('aria-label', player._('open social media sharing overlay'));
		}
		el.ggId="goshare";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 428px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._goshare.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._goshare.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('has_photo_button') == false))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._goshare.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._goshare.ggConditionsTruePosition = newConditionsTruePosition;
				me._goshare.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._goshare.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -50;
				}
					me._goshare.style.left=(20+deltaX) + 'px';
					me._goshare.style.top=(428+deltaY) + 'px';
			}
		}
		me._goshare.logicBlock_position();
		me._goshare.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['goshare'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._goshare.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._goshare.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._goshare.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._goshare.ggCurrentLogicStateScaling == 0) {
					me._goshare.ggParameter.sx = 1.2;
					me._goshare.ggParameter.sy = 1.2;
					me._goshare.style.transform=parameterToTransform(me._goshare.ggParameter);
					setTimeout(function() {skin.updateSize(me._goshare);}, 550);
				}
				else {
					me._goshare.ggParameter.sx = 1;
					me._goshare.ggParameter.sy = 1;
					me._goshare.style.transform=parameterToTransform(me._goshare.ggParameter);
					setTimeout(function() {skin.updateSize(me._goshare);}, 550);
				}
			}
		}
		me._goshare.logicBlock_scaling();
		me._goshare.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._goshare.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._goshare.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._goshare.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._goshare.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._goshare.style.opacity == 0.0) { me._goshare.style.visibility="hidden"; } }, 505);
					me._goshare.style.opacity=0;
				}
				else {
					me._goshare.style.visibility=me._goshare.ggVisible?'inherit':'hidden';
					me._goshare.style.opacity=1;
				}
			}
		}
		me._goshare.logicBlock_alpha();
		me._goshare.onclick=function (e) {
			player.setVariableValue('share', Number("1.00"));
		}
		me._goshare.onmouseover=function (e) {
			me.elementMouseOver['goshare']=true;
			me._goshare.logicBlock_scaling();
		}
		me._goshare.onmousemove=function (e) {
			me._tt_share.style.transition='none';
			me._tt_share.style.visibility=(Number(me._tt_share.style.opacity)>0||!me._tt_share.style.opacity)?'inherit':'hidden';
			me._tt_share.ggVisible=true;
		}
		me._goshare.onmouseout=function (e) {
			me._tt_share.style.transition='none';
			me._tt_share.style.visibility='hidden';
			me._tt_share.ggVisible=false;
			me.elementMouseOver['goshare']=false;
			me._goshare.logicBlock_scaling();
		}
		me._goshare.ggConditionsTruePosition = [];
		me._goshare.ggCurrentLogicStateScaling = -1;
		me._goshare.ggCurrentLogicStateAlpha = -1;
		me._goshare.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['goshare']) {
				me._tt_share.style.transition='none';
				me._tt_share.style.visibility=(Number(me._tt_share.style.opacity)>0||!me._tt_share.style.opacity)?'inherit':'hidden';
				me._tt_share.ggVisible=true;
			}
		}
		me._goshare.ggUpdatePosition=function (useTransition) {
		}
		el=me._goshare_icon=document.createElement('div');
		els=me._goshare_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOC44MSAyMS4yNCI+CiA8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyBmaWxsLW9wYWNpdHk6MSIgZD0iTTYsMTAuNTljMCwuMy0uMS42LS4xLjlsNy41OSw0LjRhMy4xMSwzLjExLDAsMSwxLS4xLDQuNCwyLjkzLDIuOTMsMCwwLDEtLjc5LTIuN2wtNy44MS00LjVhMi45MiwyLjkyLDAsMCwxLTQuMTktLjYsMi45MiwyLjkyLDAsMCwxLC41OS00LjIsMy4xNywzLjE3LDAsMCwxLDMuNzEsMGw3LjgtNC41YTMuMDgsMy4wOCwwLDEsMSwzLjcsMi4zLDIuOTIsMi45MiwwLDAsMS0yLjctLjdMNiw5Ljg5Qz'+
			'UuOTMsMTAsNiwxMC4yOSw2LDEwLjU5WiIvPgo8L3N2Zz4K';
		me._goshare_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._goshare_icon.ggUpdateText=function() {
			let altText = player._('share icon 1');
			me._goshare_icon.ggSubElement.setAttribute('alt', altText);
			if (me._goshare_icon.ggSubElementOver) {
				me._goshare_icon.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._goshare_icon.ggSubElementActive) {
				me._goshare_icon.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._goshare_icon.ggUpdateText();
		el.ggId="goshare_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : calc(50% - ((34px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._goshare_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._goshare_icon.ggUpdatePosition=function (useTransition) {
		}
		me._goshare.appendChild(me._goshare_icon);
		me.divSkin.appendChild(me._goshare);
		el=me._tt_share=document.createElement('div');
		els=me._tt_share__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 70px;';
		hs+='position : absolute;';
		hs+='top : 436px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: right;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_share.ggUpdateText=function() {
			var params = [];
			var hs = player._("Share with a friend", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_share.ggUpdateText();
		el.appendChild(els);
		me._tt_share.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_share.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('has_photo_button') == false))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._tt_share.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._tt_share.ggConditionsTruePosition = newConditionsTruePosition;
				me._tt_share.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._tt_share.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += -50;
				}
					me._tt_share.style.left=(70+deltaX) + 'px';
					me._tt_share.style.top=(436+deltaY) + 'px';
			}
		}
		me._tt_share.logicBlock_position();
		me._tt_share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_share.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._tt_share.ggCurrentLogicStateVisible == 0) {
					me._tt_share.style.visibility="hidden";
					me._tt_share.ggVisible=false;
				}
				else {
					me._tt_share.style.visibility="hidden";
					me._tt_share.ggVisible=false;
				}
			}
		}
		me._tt_share.logicBlock_visible();
		me._tt_share.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_share);
		el=me._sharebox=document.createElement('div');
		els=me._sharebox__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="sharebox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text lightbox";
		el.ggType='text';
		hs ='';
		hs+='z-index: 9999;';
		hs+='background : rgba(100,101,105,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._sharebox.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div id=\"socialbuttons\"><h3>Share with your friends<\/h3><div class=\"a2a_kit a2a_kit_size_64 a2a_default_style\"  data-a2a-icon-color=\"transparent, #3dbda4\"><a class=\"a2a_button_facebook\"><\/a><a class=\"a2a_button_x\"><\/a><a class=\"a2a_button_linkedin\"><\/a><a class=\"a2a_button_email\"><\/a><\/div><script async src=\"https:\/\/static.addtoany.com\/menu\/page.js\"><\/script><\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._sharebox.ggUpdateText();
		el.appendChild(els);
		me._sharebox.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sharebox.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('share') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._sharebox.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._sharebox.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._sharebox.style.transition='opacity 500ms ease 0ms';
				if (me._sharebox.ggCurrentLogicStateAlpha == 0) {
					me._sharebox.style.visibility=me._sharebox.ggVisible?'inherit':'hidden';
					me._sharebox.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._sharebox.style.opacity == 0.0) { me._sharebox.style.visibility="hidden"; } }, 505);
					me._sharebox.style.opacity=0;
				}
			}
		}
		me._sharebox.logicBlock_alpha();
		me._sharebox.ggUpdatePosition=function (useTransition) {
		}
		el=me._closeshare=document.createElement('div');
		el.ggUpdateAria = function() {
			me._closeshare.setAttribute('aria-label', player._('close social media sharing overlay'));
		}
		els=me._closeshare__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="closeshare";
		el.ggDx=178;
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text closebutton";
		el.ggType='text';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 4px) / 2) + 178px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 4px) / 2) - 85px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._closeshare.ggUpdateText=function() {
			var params = [];
			var hs = player._("&#xd7;", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._closeshare.ggUpdateText();
		el.appendChild(els);
		me._closeshare.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._closeshare.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['closeshare'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._closeshare.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._closeshare.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._closeshare.style.transition='transform 500ms ease 0ms';
				if (me._closeshare.ggCurrentLogicStateScaling == 0) {
					me._closeshare.ggParameter.sx = 1.2;
					me._closeshare.ggParameter.sy = 1.2;
					me._closeshare.style.transform=parameterToTransform(me._closeshare.ggParameter);
					setTimeout(function() {skin.updateSize(me._closeshare);}, 550);
				}
				else {
					me._closeshare.ggParameter.sx = 1;
					me._closeshare.ggParameter.sy = 1;
					me._closeshare.style.transform=parameterToTransform(me._closeshare.ggParameter);
					setTimeout(function() {skin.updateSize(me._closeshare);}, 550);
				}
			}
		}
		me._closeshare.logicBlock_scaling();
		me._closeshare.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('share') == Number("1")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._closeshare.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._closeshare.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._closeshare.style.transition='transform 500ms ease 0ms';
				if (me._closeshare.ggCurrentLogicStateTabIndex == 0) {
					me._closeshare.setAttribute('tabindex', '0');
				}
				else {
					me._closeshare.setAttribute('tabindex', '-1');
				}
			}
		}
		me._closeshare.logicBlock_tabindex();
		me._closeshare.onclick=function (e) {
			player.setVariableValue('share', Number("0.00"));
		}
		me._closeshare.onmouseover=function (e) {
			me.elementMouseOver['closeshare']=true;
			me._closeshare.logicBlock_scaling();
		}
		me._closeshare.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._closeshare__text)
					return;
				}
			}
			me.elementMouseOver['closeshare']=false;
			me._closeshare.logicBlock_scaling();
		}
		me._closeshare.ggUpdatePosition=function (useTransition) {
		}
		me._sharebox.appendChild(me._closeshare);
		me.divSkin.appendChild(me._sharebox);
		el=me._district_seal=document.createElement('div');
		el.ggUpdateAria = function() {
			me._district_seal.setAttribute('aria-label', player._('click to open school district website in a separate tab'));
		}
		els=me._district_seal__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._district_seal.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="district logo";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._district_seal.ggSubElement.setAttribute('alt', player._(me._district_seal.ggAltText));
			me._district_seal.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._district_seal.ggText_untranslated = img;
			me._district_seal.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._district_seal.ggSubElement.style.width = '0px';
			me._district_seal.ggSubElement.style.height = '0px';
			me._district_seal.ggSubElement.src='';
			me._district_seal.ggSubElement.src=me._district_seal.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._district_seal.ggText != player._(me._district_seal.ggText_untranslated)) {
				me._district_seal.ggText = player._(me._district_seal.ggText_untranslated);
				me._district_seal.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "logos/homebutton.png";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="district_seal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='z-index: 10;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 73px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._district_seal.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._district_seal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['district_seal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._district_seal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._district_seal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._district_seal.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._district_seal.ggCurrentLogicStateScaling == 0) {
					me._district_seal.ggParameter.sx = 1.1;
					me._district_seal.ggParameter.sy = 1.1;
					me._district_seal.style.transform=parameterToTransform(me._district_seal.ggParameter);
					setTimeout(function() {skin.updateSize(me._district_seal);}, 550);
				}
				else {
					me._district_seal.ggParameter.sx = 1;
					me._district_seal.ggParameter.sy = 1;
					me._district_seal.style.transform=parameterToTransform(me._district_seal.ggParameter);
					setTimeout(function() {skin.updateSize(me._district_seal);}, 550);
				}
			}
		}
		me._district_seal.logicBlock_scaling();
		me._district_seal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._district_seal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._district_seal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._district_seal.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._district_seal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._district_seal.style.opacity == 0.0) { me._district_seal.style.visibility="hidden"; } }, 505);
					me._district_seal.ggSubElement.src='';
					me._district_seal.style.opacity=0;
				}
				else {
					me._district_seal.style.visibility=me._district_seal.ggVisible?'inherit':'hidden';
					me._district_seal.ggSubElement.src=me._district_seal.ggText;
					me._district_seal.style.opacity=1;
				}
			}
		}
		me._district_seal.logicBlock_alpha();
		me._district_seal.onclick=function (e) {
			player.openUrl("homepage\/homepage.html","_new");
		}
		me._district_seal.onmouseover=function (e) {
			me.elementMouseOver['district_seal']=true;
			me._district_seal.logicBlock_scaling();
		}
		me._district_seal.onmousemove=function (e) {
			me._tt_seal.style.transition='none';
			me._tt_seal.style.visibility=(Number(me._tt_seal.style.opacity)>0||!me._tt_seal.style.opacity)?'inherit':'hidden';
			me._tt_seal.ggVisible=true;
		}
		me._district_seal.onmouseout=function (e) {
			me._tt_seal.style.transition='none';
			me._tt_seal.style.visibility='hidden';
			me._tt_seal.ggVisible=false;
			me.elementMouseOver['district_seal']=false;
			me._district_seal.logicBlock_scaling();
		}
		me._district_seal.ggCurrentLogicStateScaling = -1;
		me._district_seal.ggCurrentLogicStateAlpha = -1;
		me._district_seal.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['district_seal']) {
				me._tt_seal.style.transition='none';
				me._tt_seal.style.visibility=(Number(me._tt_seal.style.opacity)>0||!me._tt_seal.style.opacity)?'inherit':'hidden';
				me._tt_seal.ggVisible=true;
			}
		}
		me._district_seal.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._district_seal.clientWidth;
			var parentHeight = me._district_seal.clientHeight;
			var img = me._district_seal__img;
			var aspectRatioDiv = me._district_seal.clientWidth / me._district_seal.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentHeight = parentHeight;
			currentWidth = Math.round(parentHeight * aspectRatioImg);
			img.style.width='';
			img.style.height=parentHeight + 'px';
			if (!me._district_seal.ggScrollbars || currentWidth < me._district_seal.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._district_seal.ggScrollbars || currentHeight < me._district_seal.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		me.divSkin.appendChild(me._district_seal);
		el=me._tt_seal=document.createElement('div');
		els=me._tt_seal__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_seal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 102px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: right;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_seal.ggUpdateText=function() {
			var params = [];
			var hs = player._("District Homepage", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_seal.ggUpdateText();
		el.appendChild(els);
		me._tt_seal.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tt_seal.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_seal.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_seal.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_seal.style.transition='';
				if (me._tt_seal.ggCurrentLogicStateVisible == 0) {
					me._tt_seal.style.visibility="hidden";
					me._tt_seal.ggVisible=false;
				}
				else {
					me._tt_seal.style.visibility="hidden";
					me._tt_seal.ggVisible=false;
				}
			}
		}
		me._tt_seal.logicBlock_visible();
		me._tt_seal.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tt_seal);
		el=me._selectaschool=document.createElement('div');
		el.ggUpdateAria = function() {
			me._selectaschool.setAttribute('aria-label', player._('show and hide additional schools menu'));
		}
		els=me._selectaschool__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="selectaschool";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text selectaschool";
		el.ggType='text';
		hs ='';
		hs+='z-index: 8000;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(201,202,202,1);';
		hs+='cursor : pointer;';
		hs+='height : 68px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._selectaschool.ggUpdateText=function() {
			var params = [];
			var hs = player._("&#9776;   SELECT A SCHOOL", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._selectaschool.ggUpdateText();
		el.appendChild(els);
		me._selectaschool.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._selectaschool.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._selectaschool.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._selectaschool.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._selectaschool.style.transition='opacity 500ms ease 0ms, color 0s';
				if (me._selectaschool.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._selectaschool.style.opacity == 0.0) { me._selectaschool.style.visibility="hidden"; } }, 505);
					me._selectaschool.style.opacity=0;
				}
				else {
					me._selectaschool.style.visibility=me._selectaschool.ggVisible?'inherit':'hidden';
					me._selectaschool.style.opacity=1;
				}
			}
		}
		me._selectaschool.logicBlock_alpha();
		me._selectaschool.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['selectaschool'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._selectaschool.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._selectaschool.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._selectaschool.style.transition='opacity 500ms ease 0ms, color 0s';
				if (me._selectaschool.ggCurrentLogicStateTextColor == 0) {
					me._selectaschool.style.color="rgba(255,255,255,1)";
				}
				else {
					me._selectaschool.style.color="rgba(201,202,202,1)";
				}
			}
		}
		me._selectaschool.logicBlock_textcolor();
		me._selectaschool.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('splash') == Number("0")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._selectaschool.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._selectaschool.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._selectaschool.style.transition='opacity 500ms ease 0ms, color 0s';
				if (me._selectaschool.ggCurrentLogicStateTabIndex == 0) {
					me._selectaschool.setAttribute('tabindex', '0');
				}
				else {
					me._selectaschool.setAttribute('tabindex', '-1');
				}
			}
		}
		me._selectaschool.logicBlock_tabindex();
		me._selectaschool.onclick=function (e) {
			player.setVariableValue('sidemenu', player.getVariableValue('sidemenu') - Number("1.00"));
			if (
				(
					((player.getVariableValue('sidemenu') < Number("2")))
				)
			) {
				player.setVariableValue('sidemenu', Number("3.00"));
			}
		}
		me._selectaschool.ondblclick=function (e) {
			var flag=me._schoollist.ggPositonActive;
			if (player.transitionsDisabled) {
				me._schoollist.style.transition='none';
			} else {
				me._schoollist.style.transition='all 1000ms ease-out 0ms';
			}
			if (flag) {
				me._schoollist.ggParameter.rx=0;me._schoollist.ggParameter.ry=0;
			} else {
				me._schoollist.ggParameter.rx=-200;me._schoollist.ggParameter.ry=0;
			}
				me._schoollist.style.transform=parameterToTransform(me._schoollist.ggParameter);
			me._schoollist.ggPositonActive=!flag;
				me._schoollist.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe tabindex=\"0\" src=\"..\/schoollist\/schoollist.html\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._schoollist.ggUpdateText();
			me._schoollist.ggTextDiv.scrollTop = 0;
		}
		me._selectaschool.onmouseover=function (e) {
			me.elementMouseOver['selectaschool']=true;
			me._selectaschool.logicBlock_textcolor();
		}
		me._selectaschool.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._selectaschool__text)
					return;
				}
			}
			me.elementMouseOver['selectaschool']=false;
			me._selectaschool.logicBlock_textcolor();
		}
		me._selectaschool.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._selectaschool);
		el=me._schoollist=document.createElement('div');
		els=me._schoollist__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="schoollist";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 7999;';
		hs+='background : rgba(45,45,45,0.862745);';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 68px);';
		hs+='position : absolute;';
		hs+='right : -200px;';
		hs+='top : 68px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._schoollist.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._schoollist.ggUpdateText();
		el.appendChild(els);
		me._schoollist.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._schoollist.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('sidemenu') == Number("3")))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._schoollist.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._schoollist.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._schoollist.style.transition='right 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._schoollist.ggCurrentLogicStatePosition == 0) {
					me._schoollist.style.right='0px';
					me._schoollist.style.top='68px';
				}
				else {
					me._schoollist.style.right='-200px';
					me._schoollist.style.top='68px';
				}
			}
		}
		me._schoollist.logicBlock_position();
		me._schoollist.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('sidemenu') == Number("3")))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._schoollist.ggCurrentLogicStateText != newLogicStateText) {
				me._schoollist.ggCurrentLogicStateText = newLogicStateText;
				me._schoollist.style.transition='right 1000ms ease 0ms, top 1000ms ease 0ms';
				if (me._schoollist.ggCurrentLogicStateText == 0) {
					if (me._schoollist.ggUpdateText) {
					me._schoollist.ggUpdateText=function() {
						var params = [];
						var hs = player._("<iframe tabindex=\"0\" src=\"..\/schoollist\/schoollist.html\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._schoollist.ggUpdateText();
					} else {
						if (me._schoollist.ggUpdatePosition) me._schoollist.ggUpdatePosition();
					}
				}
				else {
					if (me._schoollist.ggUpdateText) {
					me._schoollist.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._schoollist.ggUpdateText();
					} else {
						if (me._schoollist.ggUpdatePosition) me._schoollist.ggUpdatePosition();
					}
				}
			}
		}
		me._schoollist.logicBlock_text();
		me._schoollist.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._schoollist);
		el=me._schoolbar=document.createElement('div');
		els=me._schoolbar__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="schoolbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text schoolbar";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 200px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 20px 0px 20px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._schoolbar.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._schoolbar.ggUpdateText();
		el.appendChild(els);
		me._schoolbar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._schoolbar.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._schoolbar.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._schoolbar.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._schoolbar.style.transition='opacity 500ms ease 0ms';
				if (me._schoolbar.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._schoolbar.style.opacity == 0.0) { me._schoolbar.style.visibility="hidden"; } }, 505);
					me._schoolbar.style.opacity=0;
				}
				else {
					me._schoolbar.style.visibility=me._schoolbar.ggVisible?'inherit':'hidden';
					me._schoolbar.style.opacity=1;
				}
			}
		}
		me._schoolbar.logicBlock_alpha();
		me._schoolbar.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('splash') == Number("0")))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._schoolbar.ggCurrentLogicStateText != newLogicStateText) {
				me._schoolbar.ggCurrentLogicStateText = newLogicStateText;
				me._schoolbar.style.transition='opacity 500ms ease 0ms';
				if (me._schoolbar.ggCurrentLogicStateText == 0) {
					if (me._schoolbar.ggUpdateText) {
					me._schoolbar.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(player.getNodeUserdata('_master').description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._schoolbar.ggUpdateText();
					} else {
						if (me._schoolbar.ggUpdatePosition) me._schoolbar.ggUpdatePosition();
					}
				}
				else {
					if (me._schoolbar.ggUpdateText) {
					me._schoolbar.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._schoolbar.ggUpdateText();
					} else {
						if (me._schoolbar.ggUpdatePosition) me._schoolbar.ggUpdatePosition();
					}
				}
			}
		}
		me._schoolbar.logicBlock_text();
		me._schoolbar.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._schoolbar);
		el=me._spintitle=document.createElement('div');
		els=me._spintitle__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="spinTitle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 32px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : -2px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='100% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #0d3a3d;';
		hs+='border-radius : 40px 0px 0px 40px;';
		hs+='text-align: right;';
		hs+='white-space: pre;';
		hs+='padding: 20px 30px 20px 70px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._spintitle.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("<div id=\"titles2\">%1<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._spintitle.ggUpdateText();
		player.addListener('changenode', function() {
			me._spintitle.ggUpdateText();
		});
		el.appendChild(els);
		me._spintitle.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._spintitle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('splash') == Number("1")))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._spintitle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._spintitle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._spintitle.style.transition='opacity 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._spintitle.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._spintitle.style.opacity == 0.0) { me._spintitle.style.visibility="hidden"; } }, 505);
					me._spintitle.style.opacity=0;
				}
				else {
					me._spintitle.style.visibility=me._spintitle.ggVisible?'inherit':'hidden';
					me._spintitle.style.opacity=1;
				}
			}
		}
		me._spintitle.logicBlock_alpha();
		me._spintitle.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['spintitle'] == true)) && 
				((player._(me.ggUserdata.information) != ""))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._spintitle.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._spintitle.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._spintitle__text.style.transition='opacity 500ms ease 0ms, background-color 500ms ease 0ms';
				if (me._spintitle.ggCurrentLogicStateBackgroundColor == 0) {
					me._spintitle__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._spintitle__text.style.backgroundColor="rgba(0,0,0,0.588235)";
				}
			}
		}
		me._spintitle.logicBlock_backgroundcolor();
		me._spintitle.onmouseover=function (e) {
			me.elementMouseOver['spintitle']=true;
			me._gotext.logicBlock_scaling();
			me._tt_spintitle.logicBlock_visible();
			me._spintitle.logicBlock_backgroundcolor();
		}
		me._spintitle.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._spintitle__text)
					return;
				}
			}
			me.elementMouseOver['spintitle']=false;
			me._gotext.logicBlock_scaling();
			me._tt_spintitle.logicBlock_visible();
			me._spintitle.logicBlock_backgroundcolor();
		}
		me._spintitle.ggUpdatePosition=function (useTransition) {
		}
		el=me._gotext=document.createElement('div');
		el.ggUpdateAria = function() {
			me._gotext.setAttribute('aria-label', player._('Open text overlay to read about this panorama'));
		}
		el.ggId="gotext";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle buttons";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #08375f;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((38px + 4px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 100px !important;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._gotext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gotext.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['spintitle'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._gotext.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._gotext.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._gotext.style.transition='transform 500ms ease 0ms';
				if (me._gotext.ggCurrentLogicStateScaling == 0) {
					me._gotext.ggParameter.sx = 1.1;
					me._gotext.ggParameter.sy = 1.1;
					me._gotext.style.transform=parameterToTransform(me._gotext.ggParameter);
					setTimeout(function() {skin.updateSize(me._gotext);}, 550);
				}
				else {
					me._gotext.ggParameter.sx = 1;
					me._gotext.ggParameter.sy = 1;
					me._gotext.style.transform=parameterToTransform(me._gotext.ggParameter);
					setTimeout(function() {skin.updateSize(me._gotext);}, 550);
				}
			}
		}
		me._gotext.logicBlock_scaling();
		me._gotext.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.information) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gotext.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gotext.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gotext.style.transition='transform 500ms ease 0ms';
				if (me._gotext.ggCurrentLogicStateVisible == 0) {
					me._gotext.style.visibility="hidden";
					me._gotext.ggVisible=false;
				}
				else {
					me._gotext.style.visibility=(Number(me._gotext.style.opacity)>0||!me._gotext.style.opacity)?'inherit':'hidden';
					me._gotext.ggVisible=true;
				}
			}
		}
		me._gotext.logicBlock_visible();
		me._gotext.onclick=function (e) {
			if (
				(
					((player._(me.ggUserdata.information) != ""))
				)
			) {
				LaunchFancybox2( 'iframe', pano.userdata.information, 500)
			}
		}
		me._gotext.ggUpdatePosition=function (useTransition) {
		}
		el=me._gorotate_icon2=document.createElement('div');
		els=me._gorotate_icon2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDMzLjE0Ij4KIDx0aXRsZT52Y2VfPC90aXRsZT4KIDxjaXJjbGUgc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGN4PSI0IiBjeT0iNCIgcj0iNCIvPgogPHJlY3Qgc3R5bGU9ImZpbGw6I2ZmZmZmZjsgZmlsbC1vcGFjaXR5OjEiIGhlaWdodD0iMjEuMTkiIHk9IjExLjk1IiByeD0iNCIgd2lkdGg9IjgiLz4KPC9zdmc+Cg==';
		me._gorotate_icon2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._gorotate_icon2.ggUpdateText=function() {
			let altText = player._('info icon 2');
			me._gorotate_icon2.ggSubElement.setAttribute('alt', altText);
			if (me._gorotate_icon2.ggSubElementOver) {
				me._gorotate_icon2.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._gorotate_icon2.ggSubElementActive) {
				me._gorotate_icon2.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._gorotate_icon2.ggUpdateText();
		el.ggId="gorotate_icon2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._gorotate_icon2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gorotate_icon2.ggUpdatePosition=function (useTransition) {
		}
		me._gotext.appendChild(me._gorotate_icon2);
		me._spintitle.appendChild(me._gotext);
		el=me._tt_spintitle=document.createElement('div');
		els=me._tt_spintitle__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_spintitle";
		el.ggDy=-57;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='position : absolute;';
		hs+='right : 36px;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 57px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='100% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: right;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_spintitle.ggUpdateText=function() {
			var params = [];
			var hs = player._("Read about this panorama", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_spintitle.ggUpdateText();
		el.appendChild(els);
		me._tt_spintitle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_spintitle.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['spintitle'] == true)) && 
				((player._(me.ggUserdata.information) != "")) && 
				((player.getVariableValue('ExtValue') != "keyboard"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_spintitle.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_spintitle.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_spintitle.style.transition='';
				if (me._tt_spintitle.ggCurrentLogicStateVisible == 0) {
					me._tt_spintitle.style.visibility=(Number(me._tt_spintitle.style.opacity)>0||!me._tt_spintitle.style.opacity)?'inherit':'hidden';
					me._tt_spintitle.ggVisible=true;
				}
				else {
					me._tt_spintitle.style.visibility="hidden";
					me._tt_spintitle.ggVisible=false;
				}
			}
		}
		me._tt_spintitle.logicBlock_visible();
		me._tt_spintitle.ggUpdatePosition=function (useTransition) {
		}
		me._spintitle.appendChild(me._tt_spintitle);
		me.divSkin.appendChild(me._spintitle);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 9999;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 47px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 256px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.information)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		me._splash.logicBlock_alpha();
		me._flyover1.ggVideoSource = 'media/splash.mp4';
		me._flyover1.ggVideoNotLoaded = true;
		me._media_controls.logicBlock_scaling();
		me._media_pause.logicBlock_scaling();
		me._media_play.logicBlock_scaling();
		me._media_stop.logicBlock_scaling();
		me._splashsidebar.logicBlock_size();
		me._splash_logo.logicBlock_scaling();
		me._gotour.logicBlock_scaling();
		me._gotour.logicBlock_tabindex();
		me._accessiblecontainer.logicBlock_visible();
		me._go_readable.logicBlock_scaling();
		me._go_readable.logicBlock_tabindex();
		me._go_keyboard.logicBlock_scaling();
		me._go_keyboard.logicBlock_visible();
		me._go_keyboard.logicBlock_tabindex();
		me._golanguage.logicBlock_cssclasses();
		me._gothumbs.logicBlock_scaling();
		me._gothumbs.logicBlock_alpha();
		me._tt_thumbs.logicBlock_visible();
		me._thumbnails.logicBlock_alpha();
		me._closethumbs.logicBlock_scaling();
		me._closethumbs.logicBlock_tabindex();
		me._gonext.logicBlock_scaling();
		me._gonext.logicBlock_alpha();
		me._tt_next.logicBlock_visible();
		me._goprev.logicBlock_scaling();
		me._goprev.logicBlock_alpha();
		me._tt_prev.logicBlock_visible();
		me._gorotate.logicBlock_scaling();
		me._gorotate.logicBlock_alpha();
		me._tt_rotate.logicBlock_visible();
		me._gophotos.logicBlock_scaling();
		me._gophotos.logicBlock_visible();
		me._gophotos.logicBlock_alpha();
		me._tt_photos.logicBlock_visible();
		me._tt_gophotos.logicBlock_visible();
		me._gallery1.logicBlock_tabindex();
		me._gallery2.logicBlock_tabindex();
		me._gallery3.logicBlock_tabindex();
		me._gallery4.logicBlock_tabindex();
		me._gallery5.logicBlock_tabindex();
		me._photobox.logicBlock_alpha();
		me._closephotobox.logicBlock_scaling();
		me._closephotobox.logicBlock_tabindex();
		me._godirections.logicBlock_position();
		me._godirections.logicBlock_scaling();
		me._godirections.logicBlock_alpha();
		me._tt_directions.logicBlock_position();
		me._tt_directions.logicBlock_visible();
		me._directions_box.logicBlock_alpha();
		me._directions_innerbox.logicBlock_text();
		me._closedirections_box.logicBlock_scaling();
		me._closedirections_box.logicBlock_tabindex();
		me._gocontact.logicBlock_position();
		me._gocontact.logicBlock_scaling();
		me._gocontact.logicBlock_alpha();
		me._tt_contact.logicBlock_position();
		me._tt_contact.logicBlock_visible();
		me._contactbox.logicBlock_alpha();
		me._contactbox_inner.logicBlock_text();
		me._closecontact.logicBlock_scaling();
		me._closecontact.logicBlock_tabindex();
		me._goshare.logicBlock_position();
		me._goshare.logicBlock_scaling();
		me._goshare.logicBlock_alpha();
		me._tt_share.logicBlock_position();
		me._tt_share.logicBlock_visible();
		me._sharebox.logicBlock_alpha();
		me._closeshare.logicBlock_scaling();
		me._closeshare.logicBlock_tabindex();
		me._district_seal.logicBlock_scaling();
		me._district_seal.logicBlock_alpha();
		me._tt_seal.logicBlock_visible();
		me._selectaschool.logicBlock_alpha();
		me._selectaschool.logicBlock_textcolor();
		me._selectaschool.logicBlock_tabindex();
		me._schoollist.logicBlock_position();
		me._schoollist.logicBlock_text();
		me._schoolbar.logicBlock_alpha();
		me._schoolbar.logicBlock_text();
		me._spintitle.logicBlock_alpha();
		me._spintitle.logicBlock_backgroundcolor();
		me._gotext.logicBlock_scaling();
		me._gotext.logicBlock_visible();
		me._tt_spintitle.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			me._spintitle.logicBlock_backgroundcolor();
			me._gotext.logicBlock_visible();
			me._tt_spintitle.logicBlock_visible();
		});
		player.addListener('beforechangenode', function(event) {
			me._closethumbs.onclick.call(me._closethumbs);
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hs_photo_iframe')) {
				for(var i = 0; i < hotspotTemplates['hs_photo_iframe'].length; i++) {
					hotspotTemplates['hs_photo_iframe'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hs_video_iframe')) {
				for(var i = 0; i < hotspotTemplates['hs_video_iframe'].length; i++) {
					hotspotTemplates['hs_video_iframe'][i].ggEvent_changenode();
				}
			}
			me._splash.logicBlock_alpha();
			me._media_seekbar.ggConnectToMediaEl();
			me._gotour.logicBlock_tabindex();
			me._go_readable.logicBlock_tabindex();
			me._go_keyboard.logicBlock_tabindex();
			me._gothumbs.logicBlock_scaling();
			me._gothumbs.logicBlock_alpha();
			me._tt_thumbs.logicBlock_visible();
			me._thumbnails.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._closethumbs.logicBlock_tabindex();
			me._gonext.logicBlock_alpha();
			me._tt_next.logicBlock_visible();
			me._goprev.logicBlock_alpha();
			me._tt_prev.logicBlock_visible();
			me._gorotate.logicBlock_alpha();
			me._tt_rotate.logicBlock_visible();
			me._gophotos.logicBlock_visible();
			me._gophotos.logicBlock_alpha();
			me._tt_photos.logicBlock_visible();
			me._tt_gophotos.logicBlock_visible();
			me._gallery1.logicBlock_tabindex();
			me._gallery2.logicBlock_tabindex();
			me._gallery3.logicBlock_tabindex();
			me._gallery4.logicBlock_tabindex();
			me._gallery5.logicBlock_tabindex();
			me._photobox.logicBlock_alpha();
			me._closephotobox.logicBlock_tabindex();
			me._godirections.logicBlock_position();
			me._godirections.logicBlock_alpha();
			me._tt_directions.logicBlock_position();
			me._tt_directions.logicBlock_visible();
			me._directions_box.logicBlock_alpha();
			me._directions_innerbox.logicBlock_text();
			me._closedirections_box.logicBlock_tabindex();
			me._gocontact.logicBlock_position();
			me._gocontact.logicBlock_alpha();
			me._tt_contact.logicBlock_position();
			me._tt_contact.logicBlock_visible();
			me._contactbox.logicBlock_alpha();
			me._contactbox_inner.logicBlock_text();
			me._closecontact.logicBlock_tabindex();
			me._goshare.logicBlock_position();
			me._goshare.logicBlock_alpha();
			me._tt_share.logicBlock_position();
			me._tt_share.logicBlock_visible();
			me._sharebox.logicBlock_alpha();
			me._closeshare.logicBlock_tabindex();
			me._district_seal.logicBlock_alpha();
			me._tt_seal.logicBlock_visible();
			me._selectaschool.logicBlock_alpha();
			me._selectaschool.logicBlock_tabindex();
			me._schoollist.logicBlock_position();
			me._schoollist.logicBlock_text();
			me._schoolbar.logicBlock_alpha();
			me._schoolbar.logicBlock_text();
			me._spintitle.logicBlock_alpha();
			me._spintitle.logicBlock_backgroundcolor();
			me._gotext.logicBlock_visible();
			me._tt_spintitle.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hs_photo_iframe')) {
				for(var i = 0; i < hotspotTemplates['hs_photo_iframe'].length; i++) {
					hotspotTemplates['hs_photo_iframe'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hs_video_iframe')) {
				for(var i = 0; i < hotspotTemplates['hs_video_iframe'].length; i++) {
					hotspotTemplates['hs_video_iframe'][i].ggEvent_configloaded();
				}
			}
			player.setPanTiltFov(45,0,70);
			me._splash.logicBlock_alpha();
			if (me._flyover1.ggApiPlayer) {
				if (me._flyover1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._flyover1.ggApiPlayer.playVideo();
					};
					if (me._flyover1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._flyover1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._flyover1.ggApiPlayerType == 'vimeo') {
					me._flyover1.ggApiPlayer.play();
				}
			} else {
				player.playSound("flyover1","1");
			}
			me._splashsidebar.logicBlock_size();
			me._splash_logo.logicBlock_scaling();
			me._gotour.logicBlock_tabindex();
			me._go_readable.logicBlock_tabindex();
			me._go_keyboard.logicBlock_visible();
			me._go_keyboard.logicBlock_tabindex();
			me._gothumbs.logicBlock_scaling();
			me._gothumbs.logicBlock_alpha();
			me._tt_thumbs.logicBlock_visible();
			me._thumbnails.logicBlock_alpha();
			me._thumbscontainer.ggUpdatePosition();
			me._closethumbs.logicBlock_tabindex();
			me._gonext.logicBlock_alpha();
			me._tt_next.logicBlock_visible();
			me._goprev.logicBlock_alpha();
			me._tt_prev.logicBlock_visible();
			me._gorotate.logicBlock_alpha();
			me._tt_rotate.logicBlock_visible();
			me._gophotos.logicBlock_visible();
			me._gophotos.logicBlock_alpha();
			me._tt_photos.logicBlock_visible();
			me._tt_gophotos.logicBlock_visible();
			me._gallery1.logicBlock_tabindex();
			me._gallery2.logicBlock_tabindex();
			me._gallery3.logicBlock_tabindex();
			me._gallery4.logicBlock_tabindex();
			me._gallery5.logicBlock_tabindex();
			me._photobox.logicBlock_alpha();
			me._closephotobox.logicBlock_tabindex();
			me._godirections.logicBlock_position();
			me._godirections.logicBlock_alpha();
			me._tt_directions.logicBlock_position();
			me._tt_directions.logicBlock_visible();
			me._directions_box.logicBlock_alpha();
			me._directions_innerbox.logicBlock_text();
			me._closedirections_box.logicBlock_tabindex();
			me._gocontact.logicBlock_position();
			me._gocontact.logicBlock_alpha();
			me._tt_contact.logicBlock_position();
			me._tt_contact.logicBlock_visible();
			me._contactbox.logicBlock_alpha();
			me._contactbox_inner.logicBlock_text();
			me._closecontact.logicBlock_tabindex();
			me._goshare.logicBlock_position();
			me._goshare.logicBlock_alpha();
			me._tt_share.logicBlock_position();
			me._tt_share.logicBlock_visible();
			me._sharebox.logicBlock_alpha();
			me._closeshare.logicBlock_tabindex();
			me._district_seal.logicBlock_alpha();
			me._tt_seal.logicBlock_visible();
			me._selectaschool.logicBlock_alpha();
			me._selectaschool.logicBlock_tabindex();
			me._schoollist.logicBlock_position();
			me._schoollist.logicBlock_text();
			me._schoolbar.logicBlock_alpha();
			me._schoolbar.logicBlock_text();
			me._spintitle.logicBlock_alpha();
			me._spintitle.logicBlock_backgroundcolor();
			me._gotext.logicBlock_visible();
			me._tt_spintitle.logicBlock_visible();
		});
		player.addListener('imagesready', function(event) {
			player.stopAutorotate();
		});
		player.addListener('sizechanged', function(event) {
			me._media_controls.logicBlock_scaling();
			me._accessiblecontainer.logicBlock_visible();
			me._golanguage.logicBlock_cssclasses();
		});
		player.addListener('varchanged_ExtValue', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_ExtValue();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hs_photo_iframe')) {
				for(var i = 0; i < hotspotTemplates['hs_photo_iframe'].length; i++) {
					hotspotTemplates['hs_photo_iframe'][i].ggEvent_varchanged_ExtValue();
				}
			}
			if (hotspotTemplates.hasOwnProperty('hs_video_iframe')) {
				for(var i = 0; i < hotspotTemplates['hs_video_iframe'].length; i++) {
					hotspotTemplates['hs_video_iframe'][i].ggEvent_varchanged_ExtValue();
				}
			}
			me._tt_thumbs.logicBlock_visible();
			me._tt_next.logicBlock_visible();
			me._tt_prev.logicBlock_visible();
			me._tt_rotate.logicBlock_visible();
			me._tt_photos.logicBlock_visible();
			me._tt_directions.logicBlock_visible();
			me._tt_contact.logicBlock_visible();
			me._tt_share.logicBlock_visible();
			me._tt_seal.logicBlock_visible();
			me._tt_spintitle.logicBlock_visible();
		});
		player.addListener('varchanged_contact', function(event) {
			me._contactbox.logicBlock_alpha();
			me._contactbox_inner.logicBlock_text();
			me._closecontact.logicBlock_tabindex();
		});
		player.addListener('varchanged_directions', function(event) {
			me._directions_box.logicBlock_alpha();
			me._directions_innerbox.logicBlock_text();
			me._closedirections_box.logicBlock_tabindex();
		});
		player.addListener('varchanged_gallerymenu', function(event) {
			me._tt_gophotos.logicBlock_visible();
			me._gallery1.logicBlock_tabindex();
			me._gallery2.logicBlock_tabindex();
			me._gallery3.logicBlock_tabindex();
			me._gallery4.logicBlock_tabindex();
			me._gallery5.logicBlock_tabindex();
		});
		player.addListener('varchanged_has_photo_button', function(event) {
			me._gophotos.logicBlock_visible();
			me._godirections.logicBlock_position();
			me._tt_directions.logicBlock_position();
			me._gocontact.logicBlock_position();
			me._tt_contact.logicBlock_position();
			me._goshare.logicBlock_position();
			me._tt_share.logicBlock_position();
		});
		player.addListener('varchanged_ht_ani', function(event) {
			me._gothumbs.logicBlock_scaling();
		});
		player.addListener('varchanged_photos_on', function(event) {
			me._photobox.logicBlock_alpha();
			me._closephotobox.logicBlock_tabindex();
		});
		player.addListener('varchanged_share', function(event) {
			me._sharebox.logicBlock_alpha();
			me._closeshare.logicBlock_tabindex();
		});
		player.addListener('varchanged_sidemenu', function(event) {
			me._schoollist.logicBlock_position();
			me._schoollist.logicBlock_text();
		});
		player.addListener('varchanged_splash', function(event) {
			me._splash.logicBlock_alpha();
			me._gotour.logicBlock_tabindex();
			me._go_readable.logicBlock_tabindex();
			me._go_keyboard.logicBlock_tabindex();
			me._gothumbs.logicBlock_alpha();
			me._gonext.logicBlock_alpha();
			me._goprev.logicBlock_alpha();
			me._gorotate.logicBlock_alpha();
			me._gophotos.logicBlock_alpha();
			me._godirections.logicBlock_alpha();
			me._gocontact.logicBlock_alpha();
			me._goshare.logicBlock_alpha();
			me._district_seal.logicBlock_alpha();
			me._selectaschool.logicBlock_alpha();
			me._selectaschool.logicBlock_tabindex();
			me._schoolbar.logicBlock_alpha();
			me._schoolbar.logicBlock_text();
			me._spintitle.logicBlock_alpha();
		});
		player.addListener('varchanged_thumbs', function(event) {
			for(var i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
				me._thumbnail_cloner.ggInstances[i].ggEvent_varchanged_thumbs(event);
			}
			me._thumbnails.logicBlock_alpha();
			me._closethumbs.logicBlock_tabindex();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner.ggUpdate();
		});
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: hidden;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbs=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbs;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbs__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbs_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._thumbs.ggUpdateText=function() {
			let altText = player._('panorama thumbnail');
			me._thumbs.ggSubElement.setAttribute('alt', altText);
			if (me._thumbs.ggSubElementOver) {
				me._thumbs.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._thumbs.ggSubElementActive) {
				me._thumbs.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._thumbs.ggUpdateText();
		el.ggId="thumbs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._thumbs.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbs.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['thumbs'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._thumbs.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._thumbs.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._thumbs.style.transition='transform 500ms ease 0ms';
				if (me._thumbs.ggCurrentLogicStateScaling == 0) {
					me._thumbs.ggParameter.sx = 1.05;
					me._thumbs.ggParameter.sy = 1.05;
					me._thumbs.style.transform=parameterToTransform(me._thumbs.ggParameter);
					setTimeout(function() {skin.updateSize(me._thumbs);}, 550);
				}
				else {
					me._thumbs.ggParameter.sx = 1;
					me._thumbs.ggParameter.sy = 1;
					me._thumbs.style.transform=parameterToTransform(me._thumbs.ggParameter);
					setTimeout(function() {skin.updateSize(me._thumbs);}, 550);
				}
			}
		}
		me._thumbs.logicBlock_scaling();
		me._thumbs.onclick=function (e) {
			if (me._thumbs.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._thumbs.onmouseover=function (e) {
			me.elementMouseOver['thumbs']=true;
			me._thumbs.logicBlock_scaling();
		}
		me._thumbs.onmouseout=function (e) {
			me.elementMouseOver['thumbs']=false;
			me._thumbs.logicBlock_scaling();
		}
		me._thumbs.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggUpdateAria = function() {
			me._thumbnail_active.setAttribute('aria-label', player._('open this panorama'));
		}
		el.ggId="Thumbnail Active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle thumbfocus";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 7px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((200px + 14px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 14px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '-1');
		el.ggUpdateAria();
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style.transition='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(61,189,164,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._thumbnail_active.logicBlock_bordercolor();
		me._thumbnail_active.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('thumbs') == Number("1")))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._thumbnail_active.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._thumbnail_active.style.transition='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateTabIndex == 0) {
					me._thumbnail_active.setAttribute('tabindex', '0');
				}
				else {
					me._thumbnail_active.setAttribute('tabindex', '-1');
				}
			}
		}
		me._thumbnail_active.logicBlock_tabindex();
		me._thumbnail_active.onclick=function (e) {
			if (me._thumbnail_active.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbs.appendChild(me._thumbnail_active);
		el=me._tt_spinname=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._tt_spinname;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._tt_spinname__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_spinname";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : inherit;';
		hs+='width : 209px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: 600';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 0%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_spinname.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_spinname.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_spinname.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_spinname.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_spinname.ggUpdatePosition=function (useTransition) {
		}
		me._thumbs.appendChild(me._tt_spinname);
		me.__div.appendChild(me._thumbs);
		me._thumbs.logicBlock_scaling();
		me._thumbnail_active.logicBlock_bordercolor();
		me._thumbnail_active.logicBlock_tabindex();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_active.logicBlock_bordercolor();
				me._thumbnail_active.logicBlock_tabindex();
			};
			me.ggEvent_configloaded=function(event) {
				me._thumbnail_active.logicBlock_tabindex();
			};
			me.ggEvent_varchanged_thumbs=function(event) {
				me._thumbnail_active.logicBlock_tabindex();
			};
	};
	function SkinHotspotClass_hs_video_iframe(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hs_video_iframe=document.createElement('div');
		el.ggId="hs_video_iframe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 74px;';
		hs+='position : absolute;';
		hs+='top : -47px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._hs_video_iframe.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hs_video_iframe.onclick=function (e) {
				skin._photobox.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.url)));
					var hs = player._("<iframe src=\"%1\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._photobox.ggUpdateText();
			skin._photobox.ggTextDiv.scrollTop = 0;
			skin._iframe_trigger.onclick.call(skin._iframe_trigger);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs_video_iframe.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs_video_iframe.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hs_video_iframe']=true;
			me._tt_video.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs_video_iframe.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hs_video_iframe']=false;
			me._tt_video.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs_video_iframe.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_video=document.createElement('div');
		els=me._tt_video__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_video";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 0%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_video.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_video.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_video.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_video.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hs_video_iframe'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_video.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_video.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_video.style.transition='opacity 500ms ease 0ms';
				if (me._tt_video.ggCurrentLogicStateAlpha == 0) {
					me._tt_video.style.visibility=me._tt_video.ggVisible?'inherit':'hidden';
					me._tt_video.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_video.style.opacity == 0.0) { me._tt_video.style.visibility="hidden"; } }, 505);
					me._tt_video.style.opacity=0;
				}
			}
		}
		me._tt_video.logicBlock_alpha();
		me._tt_video.ggUpdatePosition=function (useTransition) {
		}
		me._hs_video_iframe.appendChild(me._tt_video);
		el=me._hs_video_image=document.createElement('div');
		el.ggId="hs_video_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._hs_video_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_video_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hs_video_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_video_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_video_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_video_image.style.transition='transform 500ms ease 0ms, opacity 0s';
				if (me._hs_video_image.ggCurrentLogicStateScaling == 0) {
					me._hs_video_image.ggParameter.sx = 1.2;
					me._hs_video_image.ggParameter.sy = 1.2;
					me._hs_video_image.style.transform=parameterToTransform(me._hs_video_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_video_image);}, 550);
				}
				else {
					me._hs_video_image.ggParameter.sx = 1;
					me._hs_video_image.ggParameter.sy = 1;
					me._hs_video_image.style.transform=parameterToTransform(me._hs_video_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_video_image);}, 550);
				}
			}
		}
		me._hs_video_image.logicBlock_scaling();
		me._hs_video_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_video_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_video_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_video_image.style.transition='transform 500ms ease 0ms, opacity 0s';
				if (me._hs_video_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_video_image.style.visibility="hidden";
					me._hs_video_image.style.opacity=0;
				}
				else {
					me._hs_video_image.style.visibility=me._hs_video_image.ggVisible?'inherit':'hidden';
					me._hs_video_image.style.opacity=1;
				}
			}
		}
		me._hs_video_image.logicBlock_alpha();
		me._hs_video_image.onmouseover=function (e) {
			me.elementMouseOver['hs_video_image']=true;
			me._hs_video_image.logicBlock_scaling();
		}
		me._hs_video_image.onmouseout=function (e) {
			me.elementMouseOver['hs_video_image']=false;
			me._hs_video_image.logicBlock_scaling();
		}
		me._hs_video_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9ImVsZW1lbnRzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMC4zIDE2Ljg7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAuMyAxNi44IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiIHk9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPmhvdHNwb3Q8L3RpdGxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LjEsMEgzLjNDMS41LDAsMCwxLjUsMCwzLjN2MTAuMmMwLDEuOCwxLjUsMy4zLDMuMywzLjNIMTdjMS44LDAsMy4zLTEuNSwzLjMtMy4zVjMuMyYjeGE7JiN4OTtDMjAuNCwxLjUsMTguOSwwLDE3LjEsMHogTTcuMywxMi45VjQuMWw3LjgsNC40TDcuMywxMi45eiIvPgo8L3N2Zz4K';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._svg_6.ggUpdateText=function() {
			let altText = player._('video icon 1');
			me._svg_6.ggSubElement.setAttribute('alt', altText);
			if (me._svg_6.ggSubElementOver) {
				me._svg_6.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._svg_6.ggSubElementActive) {
				me._svg_6.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._svg_6.ggUpdateText();
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._hs_video_image.appendChild(me._svg_6);
		me._hs_video_iframe.appendChild(me._hs_video_image);
		me._tt_video.logicBlock_alpha();
		me._hs_video_image.logicBlock_scaling();
		me._hs_video_image.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._hs_video_image.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_video_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_ExtValue=function() {
				me._hs_video_image.logicBlock_alpha();
			};
			me.__div = me._hs_video_iframe;
	};
	function SkinHotspotClass_hs_photo_iframe(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hs_photo_iframe=document.createElement('div');
		el.ggId="hs_photo_iframe";
		el.ggDx=92;
		el.ggDy=-62;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 92px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 62px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._hs_photo_iframe.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hs_photo_iframe.onclick=function (e) {
				skin._photobox.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.url)));
					var hs = player._("<iframe src=\"%1\" width=\"100%\"; height=\"100%\" allowTransparency=\"true\" style=\"border:0; \"><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._photobox.ggUpdateText();
			skin._photobox.ggTextDiv.scrollTop = 0;
			skin._iframe_trigger.onclick.call(skin._iframe_trigger);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs_photo_iframe.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs_photo_iframe.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hs_photo_iframe']=true;
			me._tt_photo.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs_photo_iframe.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hs_photo_iframe']=false;
			me._tt_photo.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hs_photo_iframe.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_photo=document.createElement('div');
		els=me._tt_photo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_photo";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 0%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_photo.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_photo.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_photo.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_photo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_photo.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hs_photo_iframe'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_photo.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_photo.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_photo.style.transition='opacity 500ms ease 0ms';
				if (me._tt_photo.ggCurrentLogicStateAlpha == 0) {
					me._tt_photo.style.visibility=me._tt_photo.ggVisible?'inherit':'hidden';
					me._tt_photo.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_photo.style.opacity == 0.0) { me._tt_photo.style.visibility="hidden"; } }, 505);
					me._tt_photo.style.opacity=0;
				}
			}
		}
		me._tt_photo.logicBlock_alpha();
		me._tt_photo.ggUpdatePosition=function (useTransition) {
		}
		me._hs_photo_iframe.appendChild(me._tt_photo);
		el=me._hs_photo_image=document.createElement('div');
		el.ggId="hs_photo_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : -19px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._hs_photo_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_photo_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['hs_photo_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hs_photo_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hs_photo_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hs_photo_image.style.transition='transform 500ms ease 0ms, opacity 0s';
				if (me._hs_photo_image.ggCurrentLogicStateScaling == 0) {
					me._hs_photo_image.ggParameter.sx = 1.2;
					me._hs_photo_image.ggParameter.sy = 1.2;
					me._hs_photo_image.style.transform=parameterToTransform(me._hs_photo_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_photo_image);}, 550);
				}
				else {
					me._hs_photo_image.ggParameter.sx = 1;
					me._hs_photo_image.ggParameter.sy = 1;
					me._hs_photo_image.style.transform=parameterToTransform(me._hs_photo_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._hs_photo_image);}, 550);
				}
			}
		}
		me._hs_photo_image.logicBlock_scaling();
		me._hs_photo_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_photo_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_photo_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_photo_image.style.transition='transform 500ms ease 0ms, opacity 0s';
				if (me._hs_photo_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_photo_image.style.visibility="hidden";
					me._hs_photo_image.style.opacity=0;
				}
				else {
					me._hs_photo_image.style.visibility=me._hs_photo_image.ggVisible?'inherit':'hidden';
					me._hs_photo_image.style.opacity=1;
				}
			}
		}
		me._hs_photo_image.logicBlock_alpha();
		me._hs_photo_image.onmouseover=function (e) {
			me.elementMouseOver['hs_photo_image']=true;
			me._hs_photo_image.logicBlock_scaling();
		}
		me._hs_photo_image.onmouseout=function (e) {
			me.elementMouseOver['hs_photo_image']=false;
			me._hs_photo_image.logicBlock_scaling();
		}
		me._hs_photo_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9ImVsZW1lbnRzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMy4yIDE4LjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjMuMiAxOC40IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPS'+
			'IxLjEiIHk9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHRpdGxlPmhvdHNwb3Q8L3RpdGxlPgogPGNpcmNsZSBjeD0iMTEuNCIgY3k9IjEwIiBjbGFzcz0ic3QwIiByPSIzLjEiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMC4yLDIuNWgtMy41YzAtMC4yLTAuMS0wLjQtMC4xLTAuNmMwLTEtMC44LTEuOC0xLjgtMS44SDguNWMtMSwwLTEuOCwwLjgtMS45LDEuOGMwLDAuMiwwLDAuNC0wLjEsMC42SDMmI3hhOyYjeDk7Yy0xLjYsMC0zLDEuNC0zLDN2OS45YzAsMS42LDEuNCwzLDMsM2gxNy4yYzEuNiwwLDMtMS40LDMtM1Y1'+
			'LjVDMjMuMiwzLjksMjEuOSwyLjUsMjAuMiwyLjV6IE0xMS40LDE1Yy0yLjgsMC01LTIuMi01LTVzMi4yLTUsNS01JiN4YTsmI3g5O3M1LDIuMiw1LDVDMTYuNCwxMi43LDE0LjIsMTQuOSwxMS40LDE1eiIvPgo8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._svg_5.ggUpdateText=function() {
			let altText = player._('photo icon 2');
			me._svg_5.ggSubElement.setAttribute('alt', altText);
			if (me._svg_5.ggSubElementOver) {
				me._svg_5.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._svg_5.ggSubElementActive) {
				me._svg_5.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._svg_5.ggUpdateText();
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 16px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._hs_photo_image.appendChild(me._svg_5);
		me._hs_photo_iframe.appendChild(me._hs_photo_image);
		me._tt_photo.logicBlock_alpha();
		me._hs_photo_image.logicBlock_scaling();
		me._hs_photo_image.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._hs_photo_image.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._hs_photo_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_ExtValue=function() {
				me._hs_photo_image.logicBlock_alpha();
			};
			me.__div = me._hs_photo_iframe;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=-46;
		el.ggDy=-60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 46px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 60px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._tt_node.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._tt_node.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_node=document.createElement('div');
		els=me._tt_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_node";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 3px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 0%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 6px 6px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_node.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_node.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_node.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._tt_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._tt_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._tt_node.style.transition='opacity 500ms ease 0ms';
				if (me._tt_node.ggCurrentLogicStateAlpha == 0) {
					me._tt_node.style.visibility=me._tt_node.ggVisible?'inherit':'hidden';
					me._tt_node.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._tt_node.style.opacity == 0.0) { me._tt_node.style.visibility="hidden"; } }, 505);
					me._tt_node.style.opacity=0;
				}
			}
		}
		me._tt_node.logicBlock_alpha();
		me._tt_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_node);
		el=me._ht_video_image=document.createElement('div');
		el.ggId="ht_video_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 100px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -18px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._ht_video_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_video_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_video_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_video_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_video_image.style.transition='transform 500ms ease 0ms, opacity 0s';
				if (me._ht_video_image.ggCurrentLogicStateScaling == 0) {
					me._ht_video_image.ggParameter.sx = 1.2;
					me._ht_video_image.ggParameter.sy = 1.2;
					me._ht_video_image.style.transform=parameterToTransform(me._ht_video_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_image);}, 550);
				}
				else {
					me._ht_video_image.ggParameter.sx = 1;
					me._ht_video_image.ggParameter.sy = 1;
					me._ht_video_image.style.transform=parameterToTransform(me._ht_video_image.ggParameter);
					setTimeout(function() {skin.updateSize(me._ht_video_image);}, 550);
				}
			}
		}
		me._ht_video_image.logicBlock_scaling();
		me._ht_video_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ExtValue') == "keyboard"))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_video_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_video_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_video_image.style.transition='transform 500ms ease 0ms, opacity 0s';
				if (me._ht_video_image.ggCurrentLogicStateAlpha == 0) {
					me._ht_video_image.style.visibility="hidden";
					me._ht_video_image.style.opacity=0;
				}
				else {
					me._ht_video_image.style.visibility=me._ht_video_image.ggVisible?'inherit':'hidden';
					me._ht_video_image.style.opacity=1;
				}
			}
		}
		me._ht_video_image.logicBlock_alpha();
		me._ht_video_image.onmouseover=function (e) {
			me.elementMouseOver['ht_video_image']=true;
			me._ht_video_image.logicBlock_scaling();
		}
		me._ht_video_image.onmouseout=function (e) {
			me.elementMouseOver['ht_video_image']=false;
			me._ht_video_image.logicBlock_scaling();
		}
		me._ht_video_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0LjggOS4xOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDE0LjggOS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLj'+
			'EiIHk9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTcuMiwwQzYuNywwLjEsNi4zLDAuMiw2LDAuNUwwLjUsNmMtMC43LDAuOC0wLjcsMS45LDAsMi42YzAuOCwwLjcsMS45LDAuNywyLjcsMGw0LjItNC4ybDQuMiw0LjImI3hhOyYjeDk7YzAuOCwwLjQsMS44LDAuNCwyLjYsMGMwLjctMC44LDAuNy0xLjksMC0yLjZMOC44LDAuNUM4LjMsMC4xLDcuNy0wLjEsNy4yLDB6Ii8+Cjwvc3ZnPgo=';
		me._ht_node_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._ht_node_image.ggUpdateText=function() {
			let altText = player._('arrow icon 1');
			me._ht_node_image.ggSubElement.setAttribute('alt', altText);
			if (me._ht_node_image.ggSubElementOver) {
				me._ht_node_image.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._ht_node_image.ggSubElementActive) {
				me._ht_node_image.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._ht_node_image.ggUpdateText();
		el.ggId="ht_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 13px;';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-hidden', 'true');
		el.style.transformOrigin='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_image.appendChild(me._ht_node_image);
		me._ht_node.appendChild(me._ht_video_image);
		me._tt_node.logicBlock_alpha();
		me._ht_video_image.logicBlock_scaling();
		me._ht_video_image.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._ht_video_image.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_image.logicBlock_alpha();
			};
			me.ggEvent_varchanged_ExtValue=function() {
				me._ht_video_image.logicBlock_alpha();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='hs_photo_iframe') {
				hotspot.skinid = 'hs_photo_iframe';
				hsinst = new SkinHotspotClass_hs_photo_iframe(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'hs_video_iframe';
				hsinst = new SkinHotspotClass_hs_video_iframe(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._button_image_right.ggUpdateConditionTimer();
		me._button_image_left.ggUpdateConditionTimer();
		me._button_image_down.ggUpdateConditionTimer();
		me._button_image_up.ggUpdateConditionTimer();
		me._gothumbs.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				if (
					(
						((player.getVariableValue('button') == true))
					)
				) {
					player.setVariableValue('ht_ani', true);
				}
			} else {
				if (
					(
						((player.getVariableValue('button') == true))
					)
				) {
					player.setVariableValue('ht_ani', false);
				}
			}
		}
		me._gonext.ggUpdateConditionTimer();
		me._goprev.ggUpdateConditionTimer();
		me._gorotate.ggUpdateConditionTimer();
		me._gophotos.ggUpdateConditionTimer();
		me._gallery1.ggUpdateConditionTimer();
		me._gallery2.ggUpdateConditionTimer();
		me._gallery3.ggUpdateConditionTimer();
		me._gallery4.ggUpdateConditionTimer();
		me._gallery5.ggUpdateConditionTimer();
		me._godirections.ggUpdateConditionTimer();
		me._gocontact.ggUpdateConditionTimer();
		me._goshare.ggUpdateConditionTimer();
		me._district_seal.ggUpdateConditionTimer();
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: "Inter", sans-serif; font-size: 14px; line-height: normal; }'));
	document.head.appendChild(style);
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
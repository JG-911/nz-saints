/* NZ Saints and Commemorations | Version 1.9.6 */
// Stable external loader: Weebly does not need to interpret the widget's application code.
(()=>{
 'use strict';
 const script=document.currentScript;if(!script)return;
 const address=new URL('saints-widget.html',script.src),key=Symbol.for('nzsc.embed.instances');
 let state=window[key];
 if(!state){
  state={instances:new Map(),observer:null};
  state.receive=event=>{
   if(event.origin!==address.origin||event.data?.type!=='nzsc-widget-height')return;
   const instance=state.instances.get(event.source),height=event.data.height;
   if(!instance||!Number.isFinite(height)||height<=0)return;
   instance.frame.style.height=Math.ceil(height)+2+'px';instance.fallback.hidden=true;
  };
  state.cleanup=()=>{
   for(const [source,instance]of state.instances)if(!instance.host.isConnected){state.instances.delete(source);delete instance.host.dataset.nzscReady;}
   if(!state.instances.size){state.observer?.disconnect();state.observer=null;window.removeEventListener('message',state.receive);}
  };
  window[key]=state;
 }
 for(const host of document.querySelectorAll('[data-nzsc-embed]:not([data-nzsc-ready])')){
  host.dataset.nzscReady='true';const frame=document.createElement('iframe');
  frame.title='NZ Saints and Commemorations';frame.src=address.href;frame.style.cssText='display:block;width:100%;height:320px;border:0;';
  frame.setAttribute('loading','eager');frame.setAttribute('allow','clipboard-write');
  let fallback=host.querySelector('[data-nzsc-fallback]');if(!fallback){fallback=document.createElement('p');const link=document.createElement('a');link.href=address.href;link.textContent='Open NZ Saints and Commemorations';link.target='_blank';link.rel='noopener noreferrer';fallback.append(link);host.append(fallback);}
  host.append(frame);state.instances.set(frame.contentWindow,{frame,host,fallback});
  if(!state.observer){window.addEventListener('message',state.receive);state.observer=new MutationObserver(state.cleanup);state.observer.observe(document.documentElement,{childList:true,subtree:true});}
  frame.addEventListener('load',()=>frame.contentWindow?.postMessage({type:'nzsc-request-height'},address.origin),{once:true});
 }
})();

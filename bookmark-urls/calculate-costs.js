javascript:calculateEstimate();function calculateEstimate(){var a=null!==document.querySelector(".navigator-container");if(!a)return void alert(`Error: Please go to the Jira issue navigator.`);var b=null!==document.querySelector(".details-layout");if(b)return void alert(`Error: Please change view type to list.`);var c=document.querySelectorAll(".aggregatetimeestimate");if(1>c.length)return void alert(`Error: Please enable the column 'Σ Remaining Estimate.'`);var d=[],e=0,f={week:2400,day:480,hour:60,minute:1};c.forEach(a=>{var b=a.innerHTML;if(b){var c=b.split(",");d.push(...c)}}),d.forEach(a=>{a=a.trim(),a.endsWith("s")&&(a=a.substring(0,a.length-1));var b=a.split(" "),c=parseInt(b[0]),d=f[b[1]];e+=c*d});var g=e/60,h=100*parseInt(windows.prompt(`Please enter the cost per hour in €:`,9e3)),i=(h*g/100).toFixed(2),j={de:`Ungefähre Kosten für angezeigte Tickets: ${i} €.`,en:`Estimatet cost for displayed issues: ${i} €.`};alert(document.documentElement.lang in j?j[document.documentElement.lang]:j.en)}
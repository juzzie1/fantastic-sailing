document.write(document.lastModified);
now = new Date();
  localtime = now.toString();
  utctime = now.toGMTString();
  document.write("<p><strong>Local time:</strong> " + localtime + "</p>");
  document.write("<p><strong>UTC time:</strong> " + utctime + "</p>");
  hours = now.getHours();
	mins = now.getMinutes();
    secs = now.getSeconds();
	document.write("<h2>");
    document.write(hours + ":" + mins + ":" + secs);
    document.write("</h2>");
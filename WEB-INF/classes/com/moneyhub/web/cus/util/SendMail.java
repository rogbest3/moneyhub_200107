package com.moneyhub.web.cus.util;
/*
 * package com.moneyhub.web.cus;
 * 
 * import java.util.Properties;
 * 
 * import javax.mail.Message; import javax.mail.Session; import
 * javax.mail.Transport; import javax.mail.internet.InternetAddress; import
 * javax.mail.internet.MimeMessage;
 * 
 * public class SendMail { static final String FROM = "hmyanghm@gmail.com";
 * static final String FROMNAME = "머니허브"; static final String TO =
 * "hmyanghm@gmail.com";
 * 
 * static final String SMTP_USERNAME = "hmyanghm@gmail.com"; static final String
 * SMTP_PASSWORD = "diddk3487";
 * 
 * static final String HOST = "smtp.live.com"; static final int PORT = 25;
 * 
 * static final String SUBJECT = "머니허브 인증 확인 메일입니다.";
 * 
 * static final String BODY = String.join( System.getProperty("line.separator"),
 * "<h1>머니허브 인증 확인 메일</h1>", "<p>73519</p>." );
 * 
 * public static void main(String[] args) throws Exception { Properties props =
 * System.getProperties(); props.put("mail.transport.protocol", "smtp");
 * props.put("mail.smtp.port", PORT); props.put("mail.smtp.starttls.enable",
 * "true"); props.put("mail.smtp.auth", "true");
 * 
 * Session session = Session.getDefaultInstance(props);
 * 
 * MimeMessage msg = new MimeMessage(session); msg.setFrom(new
 * InternetAddress(FROM, FROMNAME)); msg.setRecipient(Message.RecipientType.TO,
 * new InternetAddress(TO)); msg.setSubject(SUBJECT); msg.setContent(BODY,
 * "text/html;charset=euc-kr");
 * 
 * Transport transport = session.getTransport();
 * 
 * try { System.out.println("Sending...");
 * 
 * transport.connect(HOST, SMTP_USERNAME, SMTP_PASSWORD);
 * transport.sendMessage(msg, msg.getAllRecipients());
 * 
 * System.out.println("Email sent!"); } catch (Exception ex) {
 * ex.printStackTrace();
 * 
 * } finally { transport.close(); } } }
 */
package com.moneyhub.web.remit.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class CharUtil {
	private int certCharLength = 8;
    private final char[] characterTable = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
                                            'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
                                            'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' };
	    
	    public String excuteGenerate() {
	        Random random = new Random(System.currentTimeMillis());
	        int tablelength = characterTable.length;
	        StringBuffer buf = new StringBuffer();
	        
	        for(int i = 0; i < certCharLength; i++) {
	            buf.append(characterTable[random.nextInt(tablelength)]);
	        }
	        
	        return buf.toString();
	    }

	    public int getCertCharLength() {
	        return certCharLength;
	    }

	    public void setCertCharLength(int certCharLength) {
	        this.certCharLength = certCharLength;
	    }

	    public void ranStr() {
    	Random ran = new Random();
    	int num;
    	boolean flag;
		int[] four = new int[4];
		List<Integer> ten = new ArrayList<Integer>();
		
		for (int i = 0; i < four.length; i++) {
			while (true) {
				num = ran.nextInt(15);
				flag = StringUtil.distinctChk(four, ten, num);
				if (!flag) {
					four[i] = num;
					break;
				}
			}
			System.out.println("1등 : " + four[i]);
		}
		
		for (int i = 0; i < 10; i++) {
			num = ran.nextInt(15);
			flag = StringUtil.distinctChk(four, ten, num);
			if (flag) {
				i--;
			} else {
				ten.add(num);
			}
		}
		for (int i = 0; i < ten.size(); i++) {
			System.out.println("2 등" + ten.get(i));
		}
	}
	
	
}
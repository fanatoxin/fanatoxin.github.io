u"""This file is a part of Marble & Mud, 大理石と泥, a MIDI Sequencer."""

from argparse import ArgumentError
from copy import deepcopy

class Pitch:
    MIN_NUM = 0
    MAX_NUM = 127
    MIN_X = 128
    MAX_X = 137

    def __init__(self, *args):
        """Return a <Pitch> object.
        Following calls are acceptable:
            Pitch(60, "C", 4)  # note-number, note-name, octave
            Pitch(60)  # note-number
        """
        self.num = None
        self.name = None
        self.__oc = None

        if args:
            if 3 <= len(args):
                self.num = args[0]
                self.name = args[1]
                self.__oc = args[2]
            else:
                self.num = args[0]
                self.__oc = (self.num // 12) - 1

    @property
    def oc(self):
        return self.__oc

    @oc.setter
    def oc(self, value):
       self.__oc = value
       self.num = (self.num % 12) + ((self.__oc + 1) * 12)

    def __str__(self):
        if self.name == "R":
            result = "R"
        elif self.num in range(Pitch.MIN_X, Pitch.MAX_X):
            result = "X" + str(self.num - Pitch.MIN_X)
        elif self.name is None or Pitch.MAX_NUM < self.num:
            result = "Pitch(" + str(self.num) + ")"
        elif self.__oc is None:
            result = self.name + "?"
        else:
            if self.__oc < 0:
                result = self.name + "L"
            else:
                result = self.name + str(self.__oc)
        return result

    def __eq__(self, other):
        if self.num == other.num and self.__oc == other.__oc:
            return True
        else:
            return False

    def __hash__(self):
        return self.num

    def copy(self):
        return deepcopy(self)

    def is_rest(self):
        return True if self.name == "R" else False

    def is_note(self):
        return not self.is_rest()

    @classmethod
    def search(cls, target):
        """Search pitch-name in <pitches> binarily."""
        global pitches

        def recurse(left, right):
            if right < left:
                return None

            center = (left + right) // 2
            pitch = pitches[center]
            name = pitch.name if pitches[center].__oc is None else str(pitch)

            if target < name:
                return recurse(left, center - 1)
            elif name < target:
                return recurse(center + 1, right)
            else: # target == name
                return pitch

        return recurse(0, len(pitches))

# ------------------------------------------------------------------------------
# Pitch Objects

Bs  = Pitch( 0, "Bs" , None)
C   = Pitch( 0, "C"  , None)
Dbb = Pitch( 0, "Dbb", None)
Bss = Pitch( 1, "Bss", None)
Cs  = Pitch( 1, "Cs" , None)
Db  = Pitch( 1, "Db" , None)
Css = Pitch( 2, "Css", None)
D   = Pitch( 2, "D"  , None)
Ebb = Pitch( 2, "Ebb", None)
Ds  = Pitch( 3, "Ds" , None)
Eb  = Pitch( 3, "Eb" , None)
Fbb = Pitch( 3, "Fbb", None)
Dss = Pitch( 4, "Dss", None)
E   = Pitch( 4, "E"  , None)
Fb  = Pitch( 4, "Fb" , None)
Es  = Pitch( 5, "Es" , None)
F   = Pitch( 5, "F"  , None)
Gbb = Pitch( 5, "Gbb", None)
Ess = Pitch( 6, "Ess", None)
Fs  = Pitch( 6, "Fs" , None)
Gb  = Pitch( 6, "Gb" , None)
Fss = Pitch( 7, "Fss", None)
G   = Pitch( 7, "G"  , None)
Abb = Pitch( 7, "Abb", None)
Gs  = Pitch( 8, "Gs" , None)
Ab  = Pitch( 8, "Ab" , None)
Gss = Pitch( 8, "Ab" , None)
A   = Pitch( 9, "A"  , None)
Bbb = Pitch( 9, "Bbb", None)
As  = Pitch(10, "As" , None)
Bb  = Pitch(10, "Bb" , None)
Cbb = Pitch(10, "Cbb", None)
Ass = Pitch(11, "Ass", None)
B   = Pitch(11, "B"  , None)
Cb  = Pitch(11, "Cb" , None)

R = Pitch(None, "R", None)

BsL  = Pitch(  0, "Bs" , -1)
CL   = Pitch(  0, "C"  , -1)
DbbL = Pitch(  0, "Dbb", -1)
BssL = Pitch(  1, "Bss", -1)
CsL  = Pitch(  1, "Cs" , -1)
DbL  = Pitch(  1, "Db" , -1)
CssL = Pitch(  2, "Css", -1)
DL   = Pitch(  2, "D"  , -1)
EbbL = Pitch(  2, "Ebb", -1)
DsL  = Pitch(  3, "Ds" , -1)
EbL  = Pitch(  3, "Eb" , -1)
FbbL = Pitch(  3, "Fbb", -1)
DssL = Pitch(  4, "Dss", -1)
EL   = Pitch(  4, "E"  , -1)
FbL  = Pitch(  4, "Fb" , -1)
EsL  = Pitch(  5, "Es" , -1)
FL   = Pitch(  5, "F"  , -1)
GbbL = Pitch(  5, "Gbb", -1)
EssL = Pitch(  6, "Ess", -1)
FsL  = Pitch(  6, "Fs" , -1)
GbL  = Pitch(  6, "Gb" , -1)
FssL = Pitch(  7, "Fss", -1)
GL   = Pitch(  7, "G"  , -1)
AbbL = Pitch(  7, "Abb", -1)
GsL  = Pitch(  8, "Gs" , -1)
AbL  = Pitch(  8, "Ab" , -1)
GssL = Pitch(  9, "Gss", -1)
AL   = Pitch(  9, "A"  , -1)
BbbL = Pitch(  9, "Bbb", -1)
AsL  = Pitch( 10, "As" , -1)
BbL  = Pitch( 10, "Bb" , -1)
CbbL = Pitch( 10, "Cbb", -1)
AssL = Pitch( 11, "Ass", -1)
BL   = Pitch( 11, "B"  , -1)
CbL  = Pitch( 11, "Cb" , -1)
Bs0  = Pitch( 12, "Bs" ,  0)
C0   = Pitch( 12, "C"  ,  0)
Dbb0 = Pitch( 12, "Dbb",  0)
Bss0 = Pitch( 13, "Bss",  0)
Cs0  = Pitch( 13, "Cs" ,  0)
Db0  = Pitch( 13, "Db" ,  0)
Css0 = Pitch( 14, "Css",  0)
D0   = Pitch( 14, "D"  ,  0)
Ebb0 = Pitch( 14, "Ebb",  0)
Ds0  = Pitch( 15, "Ds" ,  0)
Eb0  = Pitch( 15, "Eb" ,  0)
Fbb0 = Pitch( 15, "Fbb",  0)
Dss0 = Pitch( 16, "Dss",  0)
E0   = Pitch( 16, "E"  ,  0)
Fb0  = Pitch( 16, "Fb" ,  0)
Es0  = Pitch( 17, "Es" ,  0)
F0   = Pitch( 17, "F"  ,  0)
Gbb0 = Pitch( 17, "Gbb",  0)
Ess0 = Pitch( 18, "Ess",  0)
Fs0  = Pitch( 18, "Fs" ,  0)
Gb0  = Pitch( 18, "Gb" ,  0)
Fss0 = Pitch( 19, "Fss",  0)
G0   = Pitch( 19, "G"  ,  0)
Abb0 = Pitch( 19, "Abb",  0)
Gs0  = Pitch( 20, "Gs" ,  0)
Ab0  = Pitch( 20, "Ab" ,  0)
Gss0 = Pitch( 21, "Gss",  0)
A0   = Pitch( 21, "A"  ,  0)
Bbb0 = Pitch( 21, "Bbb",  0)
As0  = Pitch( 22, "As" ,  0)
Bb0  = Pitch( 22, "Bb" ,  0)
Cbb0 = Pitch( 22, "Cbb",  0)
Ass0 = Pitch( 23, "Ass",  0)
B0   = Pitch( 23, "B"  ,  0)
Cb0  = Pitch( 23, "Cb" ,  0)
Bs1  = Pitch( 24, "Bs" ,  1)
C1   = Pitch( 24, "C"  ,  1)
Dbb1 = Pitch( 24, "Dbb",  1)
Bss1 = Pitch( 25, "Bss",  1)
Cs1  = Pitch( 25, "Cs" ,  1)
Db1  = Pitch( 25, "Db" ,  1)
Css1 = Pitch( 26, "Css",  1)
D1   = Pitch( 26, "D"  ,  1)
Ebb1 = Pitch( 26, "Ebb",  1)
Ds1  = Pitch( 27, "Ds" ,  1)
Eb1  = Pitch( 27, "Eb" ,  1)
Fbb1 = Pitch( 27, "Fbb",  1)
Dss1 = Pitch( 28, "Dss",  1)
E1   = Pitch( 28, "E"  ,  1)
Fb1  = Pitch( 28, "Fb" ,  1)
Es1  = Pitch( 29, "Es" ,  1)
F1   = Pitch( 29, "F"  ,  1)
Gbb1 = Pitch( 29, "Gbb",  1)
Ess1 = Pitch( 30, "Ess",  1)
Fs1  = Pitch( 30, "Fs" ,  1)
Gb1  = Pitch( 30, "Gb" ,  1)
Fss1 = Pitch( 31, "Fss",  1)
G1   = Pitch( 31, "G"  ,  1)
Abb1 = Pitch( 31, "Abb",  1)
Gs1  = Pitch( 32, "Gs" ,  1)
Ab1  = Pitch( 32, "Ab" ,  1)
Gss1 = Pitch( 33, "Gss",  1)
A1   = Pitch( 33, "A"  ,  1)
Bbb1 = Pitch( 33, "Bbb",  1)
As1  = Pitch( 34, "As" ,  1)
Bb1  = Pitch( 34, "Bb" ,  1)
Cbb1 = Pitch( 34, "Cbb",  1)
Ass1 = Pitch( 35, "Ass",  1)
B1   = Pitch( 35, "B"  ,  1)
Cb1  = Pitch( 35, "Cb" ,  1)
Bs2  = Pitch( 36, "Bs" ,  2)
C2   = Pitch( 36, "C"  ,  2)
Dbb2 = Pitch( 36, "Dbb",  2)
Bss2 = Pitch( 37, "Bss",  2)
Cs2  = Pitch( 37, "Cs" ,  2)
Db2  = Pitch( 37, "Db" ,  2)
Css2 = Pitch( 38, "Css",  2)
D2   = Pitch( 38, "D"  ,  2)
Ebb2 = Pitch( 38, "Ebb",  2)
Ds2  = Pitch( 39, "Ds" ,  2)
Eb2  = Pitch( 39, "Eb" ,  2)
Fbb2 = Pitch( 39, "Fbb",  2)
Dss2 = Pitch( 40, "Dss",  2)
E2   = Pitch( 40, "E"  ,  2)
Fb2  = Pitch( 40, "Fb" ,  2)
Es2  = Pitch( 41, "Es" ,  2)
F2   = Pitch( 41, "F"  ,  2)
Gbb2 = Pitch( 41, "Gbb",  2)
Ess2 = Pitch( 42, "Ess",  2)
Fs2  = Pitch( 42, "Fs" ,  2)
Gb2  = Pitch( 42, "Gb" ,  2)
Fss2 = Pitch( 43, "Fss",  2)
G2   = Pitch( 43, "G"  ,  2)
Abb2 = Pitch( 43, "Abb",  2)
Gs2  = Pitch( 44, "Gs" ,  2)
Ab2  = Pitch( 44, "Ab" ,  2)
Gss2 = Pitch( 45, "Gss",  2)
A2   = Pitch( 45, "A"  ,  2)
Bbb2 = Pitch( 45, "Bbb",  2)
As2  = Pitch( 46, "As" ,  2)
Bb2  = Pitch( 46, "Bb" ,  2)
Cbb2 = Pitch( 46, "Cbb",  2)
Ass2 = Pitch( 47, "Ass",  2)
B2   = Pitch( 47, "B"  ,  2)
Cb2  = Pitch( 47, "Cb" ,  2)
Bs3  = Pitch( 48, "Bs" ,  3)
C3   = Pitch( 48, "C"  ,  3)
Dbb3 = Pitch( 48, "Dbb",  3)
Bss3 = Pitch( 49, "Bss",  3)
Cs3  = Pitch( 49, "Cs" ,  3)
Db3  = Pitch( 49, "Db" ,  3)
Css3 = Pitch( 50, "Css",  3)
D3   = Pitch( 50, "D"  ,  3)
Ebb3 = Pitch( 50, "Ebb",  3)
Ds3  = Pitch( 51, "Ds" ,  3)
Eb3  = Pitch( 51, "Eb" ,  3)
Fbb3 = Pitch( 51, "Fbb",  3)
Dss3 = Pitch( 52, "Dss",  3)
E3   = Pitch( 52, "E"  ,  3)
Fb3  = Pitch( 52, "Fb" ,  3)
Es3  = Pitch( 53, "Es" ,  3)
F3   = Pitch( 53, "F"  ,  3)
Gbb3 = Pitch( 53, "Gbb",  3)
Ess3 = Pitch( 54, "Ess",  3)
Fs3  = Pitch( 54, "Fs" ,  3)
Gb3  = Pitch( 54, "Gb" ,  3)
Fss3 = Pitch( 55, "Fss",  3)
G3   = Pitch( 55, "G"  ,  3)
Abb3 = Pitch( 55, "Abb",  3)
Gs3  = Pitch( 56, "Gs" ,  3)
Ab3  = Pitch( 56, "Ab" ,  3)
Gss3 = Pitch( 57, "Gss",  3)
A3   = Pitch( 57, "A"  ,  3)
Bbb3 = Pitch( 57, "Bbb",  3)
As3  = Pitch( 58, "As" ,  3)
Bb3  = Pitch( 58, "Bb" ,  3)
Cbb3 = Pitch( 58, "Cbb",  3)
Ass3 = Pitch( 59, "Ass",  3)
B3   = Pitch( 59, "B"  ,  3)
Cb3  = Pitch( 59, "Cb" ,  3)
Bs4  = Pitch( 60, "Bs" ,  4)
C4   = Pitch( 60, "C"  ,  4)
Dbb4 = Pitch( 60, "Dbb",  4)
Bss4 = Pitch( 61, "Bss",  4)
Cs4  = Pitch( 61, "Cs" ,  4)
Db4  = Pitch( 61, "Db" ,  4)
Css4 = Pitch( 62, "Css",  4)
D4   = Pitch( 62, "D"  ,  4)
Ebb4 = Pitch( 62, "Ebb",  4)
Ds4  = Pitch( 63, "Ds" ,  4)
Eb4  = Pitch( 63, "Eb" ,  4)
Fbb4 = Pitch( 63, "Fbb",  4)
Dss4 = Pitch( 64, "Dss",  4)
E4   = Pitch( 64, "E"  ,  4)
Fb4  = Pitch( 64, "Fb" ,  4)
Es4  = Pitch( 65, "Es" ,  4)
F4   = Pitch( 65, "F"  ,  4)
Gbb4 = Pitch( 65, "Gbb",  4)
Ess4 = Pitch( 66, "Ess",  4)
Fs4  = Pitch( 66, "Fs" ,  4)
Gb4  = Pitch( 66, "Gb" ,  4)
Fss4 = Pitch( 67, "Fss",  4)
G4   = Pitch( 67, "G"  ,  4)
Abb4 = Pitch( 67, "Abb",  4)
Gs4  = Pitch( 68, "Gs" ,  4)
Ab4  = Pitch( 68, "Ab" ,  4)
Gss4 = Pitch( 69, "Gss",  4)
A4   = Pitch( 69, "A"  ,  4)
Bbb4 = Pitch( 69, "Bbb",  4)
As4  = Pitch( 70, "As" ,  4)
Bb4  = Pitch( 70, "Bb" ,  4)
Cbb4 = Pitch( 70, "Cbb",  4)
Ass4 = Pitch( 71, "Ass",  4)
B4   = Pitch( 71, "B"  ,  4)
Cb4  = Pitch( 71, "Cb" ,  4)
Bs5  = Pitch( 72, "Bs" ,  5)
C5   = Pitch( 72, "C"  ,  5)
Dbb5 = Pitch( 72, "Dbb",  5)
Bss5 = Pitch( 73, "Bss",  5)
Cs5  = Pitch( 73, "Cs" ,  5)
Db5  = Pitch( 73, "Db" ,  5)
Css5 = Pitch( 74, "Css",  5)
D5   = Pitch( 74, "D"  ,  5)
Ebb5 = Pitch( 74, "Ebb",  5)
Ds5  = Pitch( 75, "Ds" ,  5)
Eb5  = Pitch( 75, "Eb" ,  5)
Fbb5 = Pitch( 75, "Fbb",  5)
Dss5 = Pitch( 76, "Dss",  5)
E5   = Pitch( 76, "E"  ,  5)
Fb5  = Pitch( 76, "Fb" ,  5)
Es5  = Pitch( 77, "Es" ,  5)
F5   = Pitch( 77, "F"  ,  5)
Gbb5 = Pitch( 77, "Gbb",  5)
Ess5 = Pitch( 78, "Ess",  5)
Fs5  = Pitch( 78, "Fs" ,  5)
Gb5  = Pitch( 78, "Gb" ,  5)
Fss5 = Pitch( 79, "Fss",  5)
G5   = Pitch( 79, "G"  ,  5)
Abb5 = Pitch( 79, "Abb",  5)
Gs5  = Pitch( 80, "Gs" ,  5)
Ab5  = Pitch( 80, "Ab" ,  5)
Gss5 = Pitch( 81, "Gss",  5)
A5   = Pitch( 81, "A"  ,  5)
Bbb5 = Pitch( 81, "Bbb",  5)
As5  = Pitch( 82, "As" ,  5)
Bb5  = Pitch( 82, "Bb" ,  5)
Cbb5 = Pitch( 82, "Cbb",  5)
Ass5 = Pitch( 83, "Ass",  5)
B5   = Pitch( 83, "B"  ,  5)
Cb5  = Pitch( 83, "Cb" ,  5)
Bs6  = Pitch( 84, "Bs" ,  6)
C6   = Pitch( 84, "C"  ,  6)
Dbb6 = Pitch( 84, "Dbb",  6)
Bss6 = Pitch( 85, "Bss",  6)
Cs6  = Pitch( 85, "Cs" ,  6)
Db6  = Pitch( 85, "Db" ,  6)
Css6 = Pitch( 86, "Css",  6)
D6   = Pitch( 86, "D"  ,  6)
Ebb6 = Pitch( 86, "Ebb",  6)
Ds6  = Pitch( 87, "Ds" ,  6)
Eb6  = Pitch( 87, "Eb" ,  6)
Fbb6 = Pitch( 87, "Fbb",  6)
Dss6 = Pitch( 88, "Dss",  6)
E6   = Pitch( 88, "E"  ,  6)
Fb6  = Pitch( 88, "Fb" ,  6)
Es6  = Pitch( 89, "Es" ,  6)
F6   = Pitch( 89, "F"  ,  6)
Gbb6 = Pitch( 89, "Gbb",  6)
Ess6 = Pitch( 90, "Ess",  6)
Fs6  = Pitch( 90, "Fs" ,  6)
Gb6  = Pitch( 90, "Gb" ,  6)
Fss6 = Pitch( 91, "Fss",  6)
G6   = Pitch( 91, "G"  ,  6)
Abb6 = Pitch( 91, "Abb",  6)
Gs6  = Pitch( 92, "Gs" ,  6)
Ab6  = Pitch( 92, "Ab" ,  6)
Gss6 = Pitch( 93, "Gss",  6)
A6   = Pitch( 93, "A"  ,  6)
Bbb6 = Pitch( 93, "Bbb",  6)
As6  = Pitch( 94, "As" ,  6)
Bb6  = Pitch( 94, "Bb" ,  6)
Cbb6 = Pitch( 94, "Cbb",  6)
Ass6 = Pitch( 95, "Ass",  6)
B6   = Pitch( 95, "B"  ,  6)
Cb6  = Pitch( 95, "Cb" ,  6)
Bs7  = Pitch( 96, "Bs" ,  7)
C7   = Pitch( 96, "C"  ,  7)
Dbb7 = Pitch( 96, "Dbb",  7)
Bss7 = Pitch( 97, "Bss",  7)
Cs7  = Pitch( 97, "Cs" ,  7)
Db7  = Pitch( 97, "Db" ,  7)
Css7 = Pitch( 98, "Css",  7)
D7   = Pitch( 98, "D"  ,  7)
Ebb7 = Pitch( 98, "Ebb",  7)
Ds7  = Pitch( 99, "Ds" ,  7)
Eb7  = Pitch( 99, "Eb" ,  7)
Fbb7 = Pitch( 99, "Fbb",  7)
Dss7 = Pitch(100, "Dss",  7)
E7   = Pitch(100, "E"  ,  7)
Fb7  = Pitch(100, "Fb" ,  7)
Es7  = Pitch(101, "Es" ,  7)
F7   = Pitch(101, "F"  ,  7)
Gbb7 = Pitch(101, "Gbb",  7)
Ess7 = Pitch(102, "Ess",  7)
Fs7  = Pitch(102, "Fs" ,  7)
Gb7  = Pitch(102, "Gb" ,  7)
Fss7 = Pitch(103, "Fss",  7)
G7   = Pitch(103, "G"  ,  7)
Abb7 = Pitch(103, "Abb",  7)
Gs7  = Pitch(104, "Gs" ,  7)
Ab7  = Pitch(104, "Ab" ,  7)
Gss7 = Pitch(105, "Gss",  7)
A7   = Pitch(105, "A"  ,  7)
Bbb7 = Pitch(105, "Bbb",  7)
As7  = Pitch(106, "As" ,  7)
Bb7  = Pitch(106, "Bb" ,  7)
Cbb7 = Pitch(106, "Cbb",  7)
Ass7 = Pitch(107, "Ass",  7)
B7   = Pitch(107, "B"  ,  7)
Cb7  = Pitch(107, "Cb" ,  7)
Bs8  = Pitch(108, "Bs" ,  8)
C8   = Pitch(108, "C"  ,  8)
Dbb8 = Pitch(108, "Dbb",  8)
Bss8 = Pitch(109, "Bss",  8)
Cs8  = Pitch(109, "Cs" ,  8)
Db8  = Pitch(109, "Db" ,  8)
Css8 = Pitch(110, "Css",  8)
D8   = Pitch(110, "D"  ,  8)
Ebb8 = Pitch(110, "Ebb",  8)
Ds8  = Pitch(111, "Ds" ,  8)
Eb8  = Pitch(111, "Eb" ,  8)
Fbb8 = Pitch(111, "Fbb",  8)
Dss8 = Pitch(112, "Dss",  8)
E8   = Pitch(112, "E"  ,  8)
Fb8  = Pitch(112, "Fb" ,  8)
Es8  = Pitch(113, "Es" ,  8)
F8   = Pitch(113, "F"  ,  8)
Gbb8 = Pitch(113, "Gbb",  8)
Ess8 = Pitch(114, "Ess",  8)
Fs8  = Pitch(114, "Fs" ,  8)
Gb8  = Pitch(114, "Gb" ,  8)
Fss8 = Pitch(115, "Fss",  8)
G8   = Pitch(115, "G"  ,  8)
Abb8 = Pitch(115, "Abb",  8)
Gs8  = Pitch(116, "Gs" ,  8)
Ab8  = Pitch(116, "Ab" ,  8)
Gss8 = Pitch(117, "Gss",  8)
A8   = Pitch(117, "A"  ,  8)
Bbb8 = Pitch(117, "Bbb",  8)
As8  = Pitch(118, "As" ,  8)
Bb8  = Pitch(118, "Bb" ,  8)
Cbb8 = Pitch(118, "Cbb",  8)
Ass8 = Pitch(119, "Ass",  8)
B8   = Pitch(119, "B"  ,  8)
Cb8  = Pitch(119, "Cb" ,  8)
Bs9  = Pitch(120, "Bs" ,  9)
C9   = Pitch(120, "C"  ,  9)
Dbb9 = Pitch(120, "Dbb",  9)
Bss9 = Pitch(121, "Bss",  9)
Cs9  = Pitch(121, "Cs" ,  9)
Db9  = Pitch(121, "Db" ,  9)
Css9 = Pitch(122, "Css",  9)
D9   = Pitch(122, "D"  ,  9)
Ebb9 = Pitch(122, "Ebb",  9)
Ds9  = Pitch(123, "Ds" ,  9)
Eb9  = Pitch(123, "Eb" ,  9)
Fbb9 = Pitch(123, "Fbb",  9)
Dss9 = Pitch(124, "Dss",  9)
E9   = Pitch(124, "E"  ,  9)
Fb9  = Pitch(124, "Fb" ,  9)
Es9  = Pitch(125, "Es" ,  9)
F9   = Pitch(125, "F"  ,  9)
Gbb9 = Pitch(125, "Gbb",  9)
Ess9 = Pitch(126, "Ess",  9)
Fs9  = Pitch(126, "Fs" ,  9)
Gb9  = Pitch(126, "Gb" ,  9)
Fss9 = Pitch(127, "Fss",  9)
G9   = Pitch(127, "G"  ,  9)
Abb9 = Pitch(127, "Abb",  9)

X0   = Pitch(128, "X"  ,  9)
X1   = Pitch(129, "X"  ,  9)
X2   = Pitch(130, "X"  ,  9)
X3   = Pitch(131, "X"  ,  9)
X4   = Pitch(132, "X"  , 10)
X5   = Pitch(133, "X"  , 10)
X6   = Pitch(134, "X"  , 10)
X7   = Pitch(135, "X"  , 10)
X8   = Pitch(136, "X"  , 10)
X9   = Pitch(137, "X"  , 10)

# all pitches in alphabetical order
pitches = [
    A   , A0  , A1  , A2  , A3  , A4  , A5  , A6  , A7  , A8  ,
    Ab  , Ab0 , Ab1 , Ab2 , Ab3 , Ab4 , Ab5 , Ab6 , Ab7 , Ab8 ,
    Abb , Abb0, Abb1, Abb2, Abb3, Abb4, Abb5, Abb6, Abb7, Abb8,
    Abb9, AbbL, AbL , AL  , As  , As0 , As1 , As2 , As3 , As4 ,
    As5 , As6 , As7 , As8 , AsL , Ass , Ass0, Ass1, Ass2, Ass3,
    Ass4, Ass5, Ass6, Ass7, Ass8, AssL, B   , B0  , B1  , B2  ,
    B3  , B4  , B5  , B6  , B7  , B8  , Bb  , Bb0 , Bb1 , Bb2 ,
    Bb3 , Bb4 , Bb5 , Bb6 , Bb7 , Bb8 , Bbb , Bbb0, Bbb1, Bbb2,
    Bbb3, Bbb4, Bbb5, Bbb6, Bbb7, Bbb8, BbbL, BbL , BL  , Bs  ,
    Bs0 , Bs1 , Bs2 , Bs3 , Bs4 , Bs5 , Bs6 , Bs7 , Bs8 , Bs9 ,
    BsL , Bss , Bss0, Bss1, Bss2, Bss3, Bss4, Bss5, Bss6, Bss7,
    Bss8, Bss9, BssL, C   , C0  , C1  , C2  , C3  , C4  , C5  ,
    C6  , C7  , C8  , C9  , Cb  , Cb0 , Cb1 , Cb2 , Cb3 , Cb4 ,
    Cb5 , Cb6 , Cb7 , Cb8 , Cbb , Cbb0, Cbb1, Cbb2, Cbb3, Cbb4,
    Cbb5, Cbb6, Cbb7, Cbb8, CbbL, CbL , CL  , Cs  , Cs0 , Cs1 ,
    Cs2 , Cs3 , Cs4 , Cs5 , Cs6 , Cs7 , Cs8 , Cs9 , CsL , Css ,
    Css0, Css1, Css2, Css3, Css4, Css5, Css6, Css7, Css8, Css9,
    CssL, D   , D0  , D1  , D2  , D3  , D4  , D5  , D6  , D7  ,
    D8  , D9  , Db  , Db0 , Db1 , Db2 , Db3 , Db4 , Db5 , Db6 ,
    Db7 , Db8 , Db9 , Dbb , Dbb0, Dbb1, Dbb2, Dbb3, Dbb4, Dbb5,
    Dbb6, Dbb7, Dbb8, Dbb9, DbbL, DbL , DL  , Ds  , Ds0 , Ds1 ,
    Ds2 , Ds3 , Ds4 , Ds5 , Ds6 , Ds7 , Ds8 , Ds9 , DsL , Dss ,
    Dss0, Dss1, Dss2, Dss3, Dss4, Dss5, Dss6, Dss7, Dss8, Dss9,
    DssL, E   , E0  , E1  , E2  , E3  , E4  , E5  , E6  , E7  ,
    E8  , E9  , Eb  , Eb0 , Eb1 , Eb2 , Eb3 , Eb4 , Eb5 , Eb6 ,
    Eb7 , Eb8 , Eb9 , Ebb , Ebb0, Ebb1, Ebb2, Ebb3, Ebb4, Ebb5,
    Ebb6, Ebb7, Ebb8, Ebb9, EbbL, EbL , EL  , Es  , Es0 , Es1 ,
    Es2 , Es3 , Es4 , Es5 , Es6 , Es7 , Es8 , Es9 , EsL , Ess ,
    Ess0, Ess1, Ess2, Ess3, Ess4, Ess5, Ess6, Ess7, Ess8, Ess9,
    EssL, F   , F0  , F1  , F2  , F3  , F4  , F5  , F6  , F7  ,
    F8  , F9  , Fb  , Fb0 , Fb1 , Fb2 , Fb3 , Fb4 , Fb5 , Fb6 ,
    Fb7 , Fb8 , Fb9 , Fbb , Fbb0, Fbb1, Fbb2, Fbb3, Fbb4, Fbb5,
    Fbb6, Fbb7, Fbb8, Fbb9, FbbL, FbL , FL  , Fs  , Fs0 , Fs1 ,
    Fs2 , Fs3 , Fs4 , Fs5 , Fs6 , Fs7 , Fs8 , Fs9 , FsL , Fss ,
    Fss0, Fss1, Fss2, Fss3, Fss4, Fss5, Fss6, Fss7, Fss8, Fss9,
    FssL, G   , G0  , G1  , G2  , G3  , G4  , G5  , G6  , G7  ,
    G8  , G9  , Gb  , Gb0 , Gb1 , Gb2 , Gb3 , Gb4 , Gb5 , Gb6 ,
    Gb7 , Gb8 , Gb9 , Gbb , Gbb0, Gbb1, Gbb2, Gbb3, Gbb4, Gbb5,
    Gbb6, Gbb7, Gbb8, Gbb9, GbbL, GbL , GL  , Gs  , Gs0 , Gs1 ,
    Gs2 , Gs3 , Gs4 , Gs5 , Gs6 , Gs7 , Gs8 , GsL , Gss , Gss0,
    Gss1, Gss2, Gss3, Gss4, Gss5, Gss6, Gss7, Gss8, GssL, R   ,
    X0  , X1  , X2  , X3  , X4  , X5  , X6  , X7  , X8  , X9  ]


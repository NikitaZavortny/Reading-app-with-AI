from sumy.summarizers.lex_rank import LexRankSummarizer                   
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer

def summar(text, power, lang="english"):
    parser = PlaintextParser.from_string(text, Tokenizer(lang))
    summarizer_lex = LexRankSummarizer()                      
                    
    summary= summarizer_lex(parser.document, power)
    lex_summary=""                         
    for sentence in summary:                    
        lex_summary+=str(sentence)
    return lex_summary
    
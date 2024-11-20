# from PIL import Image
# import os

# #######ユーザー入力変数#######

# # 圧縮したい画像が保存されているフォルダパスを指定
# file_path = file_path = input("ファイルパス").replace('"',"")

# # 圧縮後の画像を保存したいフォルダパスを指定
# save_file_path = file_path = input("ファイルパス").replace('"',"")

# # 保存したい画像フォーマットを指定
# # jpg, png, webpのいずれかを指定する
# # 圧縮したい画像がjpg画像の場合の保存フォーマット
# save_format_jpg = "jpg"

# # 圧縮したい画像がpng画像の場合の保存フォーマット
# save_format_png = "png"

# # 「jpg」と「webp」画像の圧縮率の指定
# # 「jpg」の場合は、0-95, 「webp」の場合は、0-100で指定
# compression_rate_jpg = 50
# compression_rate_webp = 50

# # 「png」画像の色数の指定
# # 1 - 256で指定
# compression_color_num = 256

# ##########プロセス処理部分##########

# # フォルダの区切り文字を取得(windowとmacで異なるため)
# Delimiter_path = os.sep

# # 圧縮したい画像のファイル名取得
# filename_pic_list = os.listdir(file_path)

# # for文により、フォルダ内のファイルの数だけ、下記のコードを実行
# for filename_pic in filename_pic_list:

#     # 元の画像ファイル名をファイル名と拡張子に分割する。
#     file, ext = os.path.splitext(filename_pic)

#     # 画像フォーマットによる場合わけ
#     if ext == '.png':
#         # 圧縮したい画像の読み込み。
#         img = Image.open(file_path + Delimiter_path + filename_pic)
#         # 画像の色数を削減
#         img = img.convert("P", palette=Image.ADAPTIVE,
#                           colors=compression_color_num)
#         # 画像を指定した色数で保存(pngの場合)
#         img.save((save_file_path + Delimiter_path + file +
#                   '.' + save_format_png), optimize=True)

#     elif ext == '.jpg' or ext == '.webp':
#         # 圧縮したい画像の読み込み。
#         img = Image.open(file_path + Delimiter_path + filename_pic)

#         # 保存する画像フォーマットを拡張子により、指定
#         if ext == '.jpg':
#             save_format = save_format_jpg
#             compression_rate = compression_rate_jpg
#         # elif ext == '.webp':
#         #     save_format = save_format_webp
#         #     compression_rate = compression_rate_webp

#         # 画像を指定した圧縮率で保存(jpgとwebpの場合)
#         img.save((save_file_path + Delimiter_path + file  +
#                  "." + save_format), optimize=True, quality=compression_rate)

from PIL import Image
import os

path = input("写真の参照").replace('"',"")
jpg = ".jpg"
png = ".png"
compj = "_comp.jpg"
compp = "_comp.png"

if os.path.exists(path + jpg):
        im = Image.open(path + jpg) 
        gray_im = im.convert('L') # グレースケールに変換する
        gray_im.save(path + gray) # 画像を保存する
else:
        print("画像がありません")


before_size = os.path.getsize(path + jpg)
after_size = os.path.getsize(path + gray)

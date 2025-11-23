import os, time, sys

BASE_PATH = path = os.path.dirname(os.path.realpath(sys.argv[0]))

article_name = input("请输入文章名称：")

os.popen(f'pnpm add-post {article_name}')
article_path = f"{BASE_PATH}/src/content/posts/{article_name}.md"
print(f"文章 {article_name} 已创建, 路径为 {article_path}")
time.sleep(1)
os.popen(f"start {article_path}")
